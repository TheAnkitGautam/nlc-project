import TeamCard from '../components/TeamCard/TeamCard';
import TeamHeader from './../components/TeamHeader/TeamHeader';

const TeamPage = () => {
    return (
        <>
            <div style={{background: "linear-gradient(180deg, rgba(245, 107, 47, 0.5) -4.96%, rgba(245, 107, 47, 0.20) -4.95%, rgba(255, 255, 255, 0.15) 95.04%), #FFFFFF" }}>
                <TeamHeader />
                <TeamCard />
            </div>
        </>
    );
}

export default TeamPage;
