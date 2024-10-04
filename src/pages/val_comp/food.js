import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'
import ValLayout from '../../components/val_layout'
import ValTableLayout from '../../components/val_table_layout'

const ValFood = ({ data }) => {
    const [filter, setFilter] = React.useState("");

    // filterFunction to pass to tableLayout
    const foodFilter = (food, filter) => {
            const item = food.Item.toLowerCase();
            const biome = food.Biome.toLowerCase();
            const recipe = food.Recipe?.toLowerCase();
            const health = parseFloat(food.Health) || 0;
            const stamina = parseFloat(food.Stamina) || 0;
            const eitr = parseFloat(food.Eitr) || 0;

            //text filters
            const textFilters =
                item.includes(filter) ||
                biome.includes(filter) ||
                recipe?.includes(filter);

            //"math" filters
            const balanced = health === stamina && filter.toLowerCase().includes("bal");
            const healthFilter = Math.max(health, stamina, eitr) === health && health !== stamina && filter.toLowerCase().includes("hea");
            const staminaFilter = Math.max(health, stamina, eitr) === stamina && health !== stamina && filter.toLowerCase().includes("sta");
            const eitrFilter = Math.max(health, stamina, eitr) === eitr && health !== stamina && filter.toLowerCase().includes("eit");

            return (
                textFilters ||
                balanced ||
                healthFilter ||
                staminaFilter ||
                eitrFilter
            );
        };

    return (
        <ValLayout
            background = {`url("/images/backgrounds/ebrithil_food.png")`}
            title = "Food Recipes"
        >
            <ValTableLayout
                filter = {filter}
                setFilter = {setFilter}
                filterFunction = {foodFilter}
                data = {data.allDataJson.nodes}
                headers = {["Item", "Health", "Stamina", "Eitr", "Healing", "Duration", "Biome", "Recipe"]}
                imgBasePath = {"/images/food"}
            />
        </ValLayout>
    )
}

export const query = graphql`
    query {
        allDataJson(filter: {title: {eq: "Food"}}) {
            nodes {
                content {
                    Item
                    Health
                    Stamina
                    Eitr
                    Healing
                    Duration
                    Biome
                    Recipe
                }
            }
        }
    }
`

export const Head = () => <Seo title="Valheim Food" />

export default ValFood