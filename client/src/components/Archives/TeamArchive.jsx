import React, { useState } from 'react'
import CSS from './TeamArchive.module.css';
import Page from './page';


const TeamArchive = () => {

    const [page, setPage] = useState(0);

    return (
        <section style={{ paddingTop: "4rem", height: "100vh" }}>
            <div className={CSS.wrapper}>
                {page === 0 &&
                    <div className={CSS.intro_page}>
                        <h1>Archives</h1>
                    </div>
                }

                {page === 1 &&
                    <Page />
                }

                {page === 2 &&
                    <Page />
                }
                <div className={`${CSS.sideBar}`}
                    onClick={() => setPage(page === 0 || page === 2 ? 1 : 0)}>
                    page 1
                </div>
                <div className={`${CSS.sideBar}`}
                    onClick={() => setPage(page === 0 || page === 1 ? 2 : 0)} >
                    page 2
                </div>
            </div>
        </section >
    )
}

export default TeamArchive