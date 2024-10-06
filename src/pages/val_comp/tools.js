import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'
import ValLayout from '../../components/val_layout'
import ValTableLayout from '../../components/val_table_layout'

const ValTools = ({ data }) => {

    return (
        <ValLayout
            background = {`url("/images/backgrounds/ebrithil_base.png")`}
            title = "Tool Recipes"
        >
            <ValTableLayout
                data = {data.allDataJson.nodes}
                headers = {["Item", "Qualities", "Durability", "Recipe", "Workbench"]}
                imgBasePath = {"/images/tools"}
                showSearch = {false}
                contentFlag = 'building'
                contentNames = {["Item", "Qualities", "Durability", "Recipe", "CraftingStation"]}
            />
            <div style={{marginBottom: '2%'}}></div>
            <ValTableLayout
                data = {data.allDataJson.nodes}
                headers = {["Item", "Qualities", "Durability", "Recipe", "Forge"]}
                imgBasePath = {"/images/tools"}
                showSearch = {false}
                contentFlag = 'farming'
                contentNames = {["Item", "Qualities", "Durability", "Recipe", "CraftingStation"]}
            />
            <div style={{marginBottom: '2%'}}></div>
            <ValTableLayout
                data = {data.allDataJson.nodes}
                headers = {["Item", "Qualities", "Durability", "Recipe", "Workbench"]}
                imgBasePath = {"/images/tools"}
                showSearch = {false}
                contentFlag = 'fishing'
            />
            <div style={{marginBottom: '2%'}}></div>
            <ValTableLayout
                data = {data.allDataJson.nodes}
                headers = {["Item", "Tree Types", "Qualities", "Durability", "Recipe", "Workbench/Forge"]}
                imgBasePath = {"/images/tools"}
                showSearch = {false}
                contentFlag = 'logging'
                contentNames = {["Item", "Uses", "Qualities", "Durability", "Recipe", "CraftingStation"]}
            />
            <div style={{marginBottom: '2%'}}></div>
            <ValTableLayout
                data = {data.allDataJson.nodes}
                headers = {["Item", "Ore Types", "Qualities", "Durability", "Recipe", "Workbench/Forge"]}
                imgBasePath = {"/images/tools"}
                showSearch = {false}
                contentFlag = 'mining'
                contentNames = {["Item", "Uses", "Qualities", "Durability", "Recipe", "CraftingStation"]}
            />
        </ValLayout>
    )
}


export const query = graphql`
    query MyQuery {
        allDataJson(filter: {title: {eq: "Tools"}}) {
            nodes {
                building {
                    Item
                    Qualities {
                        Level
                        Durability
                        Recipe {
                            Material
                            Quantity
                        }
                        CraftingStation
                    }
                }
                farming {
                    Item
                    Qualities {
                        Level
                        Durability
                        Recipe {
                            Material
                            Quantity
                        }
                        CraftingStation
                    }
                }
                fishing {
                    Item
                    Qualities {
                        Level
                        Recipe {
                            Material
                            Quantity
                        }
                    }
                }
                logging {
                    Item
                    Uses
                    Qualities {
                        Level
                        Durability
                        Recipe {
                            Material
                            Quantity
                        }
                        CraftingStation
                    }
                }
                mining {
                    Item
                    Uses
                    Qualities {
                        Level
                        Durability
                        Recipe {
                            Material
                            Quantity
                        }
                        CraftingStation
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="Valheim Tools"/>

export default ValTools