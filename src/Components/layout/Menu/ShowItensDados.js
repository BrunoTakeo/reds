import * as BsIcon from 'react-icons/bs';
import * as IoIcon from 'react-icons/io5';
import * as FaIcon from 'react-icons/fa';
import * as CgIcon from 'react-icons/cg';

const ShowItensDados = [
    {
        page:'Home',
        icon:<BsIcon.BsHouse/>,
        path:'/home',
    },
    {
        page:'Sala',
        icon:<IoIcon.IoGameControllerOutline/>,
        path:'/sala',
    },
    {
        page:'Rank',
        icon:<IoIcon.IoTrophyOutline/>,
        path:'/rank'
    },
    {
        page:'Amigos',
        icon:<FaIcon.FaUserFriends/>,
        path:'/amigos'
    },
    {
        page:'Perfil',
        icon:<CgIcon.CgProfile/>,
        path:'/perfil'
    }
]
export default ShowItensDados;