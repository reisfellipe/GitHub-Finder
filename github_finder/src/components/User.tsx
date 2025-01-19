import { UserProps } from "../types/user";
import {MdLocationPin} from 'react-icons/md';
import {Link} from 'react-router-dom';

const User = ({login, avatar_url, followers,following,location}) => {
    return (
        <div>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (<p>
                <MdLocationPin />
                <span>{location}</span>
                </p>)}
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div>
            <Link to={`/repos/${login}`}></Link>
        </div>
    );
};

export default User;