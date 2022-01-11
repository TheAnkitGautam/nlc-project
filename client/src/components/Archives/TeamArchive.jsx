import React, { useState } from 'react'
import CSS from './TeamArchive.module.css';
import image from './coord-1.png';

const TeamArchive = () => {

    const [tab, setTab] = useState(0);

    const handleTabChange = (index) => {
        setTab(index);
    }

    return (
        <section style={{ paddingTop: "70px" }}>
            <div className={CSS.wrapper} style={tab === 1 ? { backgroundColor: "rgb(94, 163, 236)" } : { backgroundColor: "rgb(246, 68, 68)" }}>
                <div
                    onClick={() => handleTabChange(0)}
                    className={tab === 0 ? `${CSS.main} ${CSS.activeTab}` : `${CSS.main} ${CSS.FadeTop} ${CSS.FadeAnim}`}>
                    <h3 className={CSS.title}>Archives</h3>
                    <div className={CSS.mainBox}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit ipsam facilis exercitationem explicabo sed maxime veritatis. Dignissimos praesentium repellendus eos voluptatum, hic odit minima nemo id et dicta minus!
                    </div>
                </div>

                <div
                    onClick={() => handleTabChange(1)}
                    className={tab === 1 ? `${CSS.sidebar} ${CSS.activeTab} ${CSS.tabAnim}` : `${CSS.sidebar} ${CSS.FadeTop} ${CSS.FadeAnim}`}>
                    <h3 className={CSS.title}>NLC 2.0</h3>
                    <div className={CSS.sideBox}>
                        <div className={CSS.content}>
                            <div className={CSS.imgBox}>
                                <div className={CSS.card}>
                                    <img className={CSS.cardImg} src={image} alt="" srcset="" />
                                    <h6 className={CSS.name}>Ankit</h6>
                                    <h6 className={CSS.post}>President</h6>
                                </div>
                                <div className={CSS.card}>
                                    <img className={CSS.cardImg} src={image} alt="" srcset="" />
                                    <h6 className={CSS.name}>Ankit</h6>
                                    <h6 className={CSS.post}>President</h6>
                                </div>
                                <div className={CSS.card}>
                                    <img className={CSS.cardImg} src={image} alt="" srcset="" />
                                    <h6 className={CSS.name}>Ankit</h6>
                                    <h6 className={CSS.post}>President</h6>
                                </div>
                            </div>
                            <div className={CSS.secondBox}>
                                <h2 className={CSS.mentionTitle}>Other Members</h2>
                                <ul className={CSS.mentionList}>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => handleTabChange(2)}
                    className={tab === 2 ? `${CSS.sidebar} ${CSS.activeTab} ${CSS.tabAnim}` : `${CSS.sidebar} ${CSS.FadeTop} ${CSS.FadeAnim}`}>
                    <h3 className={CSS.title}>NLC 1.0</h3>
                    <div className={CSS.sideBox}>
                        <div className={CSS.content}>
                            <div className={CSS.imgBox}>
                                <div className={CSS.card}>
                                    <img className={CSS.cardImg} src={image} alt="" srcset="" />
                                    <h6 className={CSS.name}>Ankit</h6>
                                    <h6 className={CSS.post}>President</h6>
                                </div>
                                <div className={CSS.card}>
                                    <img className={CSS.cardImg} src={image} alt="" srcset="" />
                                    <h6 className={CSS.name}>Ankit</h6>
                                    <h6 className={CSS.post}>President</h6>
                                </div>
                                <div className={CSS.card}>
                                    <img className={CSS.cardImg} src={image} alt="" srcset="" />
                                    <h6 className={CSS.name}>Ankit</h6>
                                    <h6 className={CSS.post}>President</h6>
                                </div>
                            </div>
                            <div className={CSS.secondBox}>
                                <h2 className={CSS.mentionTitle}>Other Members</h2>
                                <ul className={CSS.mentionList}>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                    <li className={CSS.mentionItem}>Ankit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default TeamArchive