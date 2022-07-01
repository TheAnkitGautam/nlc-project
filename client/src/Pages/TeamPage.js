import TeamCard from '../components/TeamCard/TeamCard';
import TeamHeader from './../components/TeamHeader/TeamHeader';

const TeamPage = () => {
    return (
        <>
            <div className='container pageLoadAnim'>
                <TeamHeader />
                <TeamCard />
            </div>
        </>
    );
}

export default TeamPage;
