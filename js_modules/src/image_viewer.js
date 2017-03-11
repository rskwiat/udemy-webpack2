import './styles/image_viewer.css';
import paint from '../assets/paint.jpg';

export default () => {
  const image = document.createElement('img');
  image.src = paint;
  document.body.appendChild(image);
};
