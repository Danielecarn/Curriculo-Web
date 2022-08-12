import Avatar from '../img/me.jpg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Daniele Carnauba" />
      <p className="title">Desenvolvedora Full Stack</p>
      <SocialNetworks/>
      <p>contato</p>
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  )
}

export default Sidebar