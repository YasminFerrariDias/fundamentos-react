import { Header } from './components/Header'
import { Post } from './Post'
import "./styles.css"

export default function App() {
  return (
    <div>
      <Header />
      <Post 
        author="John Doe" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo sed provident quasi ut minus eos mollitia nemo rerum delectus porro autem culpa repellat deleniti beatae, minima temporibus asperiores dolor."
      />
      <Post 
        author="MarceloLocky" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  )
}
