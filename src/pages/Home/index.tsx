import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Logo from '@/components/Logo';

import './index.css';

export default function Home(props) {
  const { history } = props;

  return (
    <View className="home">
      <Logo />
      <Text className="title">Welcome to Your Rax App!!!</Text>
      <Text className="info">More information about Rax</Text>
      <Text className="info" onClick={() => history.push('/about')}>Go About</Text>
    </View>
  );
}
