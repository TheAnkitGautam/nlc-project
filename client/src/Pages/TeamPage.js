import TeamCard from '../components/TeamCard/TeamCard';
import TeamHeader from './../components/TeamHeader/TeamHeader';

const TeamPage = () => {
    return (
        <div>
            <div className='container pageLoadAnim'>
                <TeamHeader />
                <TeamCard />
            </div>
        </div>
    );
}

export default TeamPage;
