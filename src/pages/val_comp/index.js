import * as React from 'react'
import { navigate, Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import {
    mainHeader,
    mainBody,
    buttonDiv,
    topButtonDiv,
    botButtonDiv,
    backButtonDiv,
    button
} from '../../components/val_layout.module.css'

const ValComp = () => {
    return (
        <>
            <body className={mainBody}>
                <div className={mainHeader}></div>
                <div className={buttonDiv}>
                    <div className={topButtonDiv}>
                        <button className={button} onClick={()=>{underConstruction()}}>Tools</button>
                        <button className={button} onClick={()=>{underConstruction()}}>Weapons</button>
                        <button className={button} onClick={()=>{underConstruction()}}>Armor</button>
                    </div>
                    <div className={botButtonDiv}>
                        <button className={button} onClick={()=>{navigate("/val_comp/food")}}>Food</button>
                        <button className={button} onClick={()=>{navigate("/val_comp/farm")}}>Farming/Fishing</button>
                        <button className={button} onClick={()=>{navigate("/val_comp/mead")}}>Mead</button>
                    </div>
                </div>
                <div class={backButtonDiv}>
                    <button class={button} onClick={()=>{navigate("/")}}>Back to Main Site</button>
                </div>
            </body>
        </>
        
    )
}

function underConstruction() {
    window.alert("This page is currently under construction!" +
        "\nPlease check back soon!"
    )
}

export const Head = () => <Seo title="Valheim Companion" />

export default ValComp