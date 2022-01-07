import CSS from './TeamArchive.module.css';

const Page = () => {
    return (
        <div className={`${CSS.page} pageLoadAnim`} style={{ background: "linear-gradient(180deg, rgba(245, 107, 47, 0.5) -4.96%, rgba(245, 107, 47, 0.20) -4.95%, rgba(255, 255, 255, 0.15) 95.04%), #FFFFFF" }}>
            <h1 className={CSS.pageTitle}>NLC 1.0</h1>
        </div>
    );
}

export default Page;