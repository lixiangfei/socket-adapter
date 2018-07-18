import SockLink from './socketlink';
import AbstractMessage from './msg/AbstractMessage';

export { AbstractMessage };

export default SockLink;
window.SockLink = SockLink;
window.AbstractMessage = AbstractMessage;