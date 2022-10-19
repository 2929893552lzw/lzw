import './/App.css'
import { Tabs, TabBar, Swiper, Footer, Space } from 'antd-mobile'
import { TabBarItem } from 'antd-mobile/es/components/tab-bar/tab-bar'
import {
  FaceRecognitionOutline,
  AppstoreOutline,
  StarFill
} from 'antd-mobile-icons'
import {
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  const navigate = useNavigate()
  return (
    <div className='app' >
      <Routes>
        <Route path='2' element={<Sy />}></Route>
        <Route path='3' element={<Ph />}></Route>
        <Route path='4' element={<Tg />}></Route>
      </Routes>
      <TabBar className='bql' onChange={(key) => { (navigate(key)) }}>
        <TabBarItem title='首页' key='2' icon={FaceRecognitionOutline}></TabBarItem>
        <TabBarItem title='排行' key='3' icon={StarFill}></TabBarItem>
        <TabBarItem title='推广' key='4' icon={AppstoreOutline}></TabBarItem>
      </TabBar>
      <Footer label='没有更多了'></Footer>
    </div>
  )
}
function Sy() {
  return (
    <>
      <Tabs>
        <Tabs.Tab title='推荐' key='tj'>
          <Swiper className='lbt' loop autoplay autoplayInterval={5000} >
            <Swiper.Item>
              <img className='xx' src={require('./tp/罚罪.jpg')}></img>
            </Swiper.Item>
            <Swiper.Item>
              <img className='xx' src={require('./tp/飞虎.jpg')}></img>
            </Swiper.Item>
            <Swiper.Item>
              <img className='xx' src={require('./tp/底线.jpg')}></img>
            </Swiper.Item>
          </Swiper>
          <div className='title'>近期热播</div>
          <img className='xs' src={require('./tp/罚罪.jpg')}></img>
          <img className='xs' src={require('./tp/底线.jpg')}></img>
          <img className='xs' src={require('./tp/飞虎.jpg')}></img>
          <img className='xs' src={require('./tp/罚罪.jpg')}></img>
        </Tabs.Tab>
        <Tabs.Tab title='新剧' key='xj'>
          <div className='title'>一起看新剧</div>
        </Tabs.Tab>
        <Tabs.Tab title='电视剧' key='dsj'>
          <div className='title'>今日推荐</div>
        </Tabs.Tab>
        <Tabs.Tab title='电影' key='dy'>
          <div className='title'>免费看影院热映</div>
        </Tabs.Tab>
        <Tabs.Tab title='综艺' key='zy'>
          <div className='title'>热播综艺</div>
        </Tabs.Tab>
      </Tabs>
    </>

  )

}
function Ph() {
  return (
    <>
      <div>1</div>
    </>

  )

}
function Tg() {
  return (
    <>
      <div>3</div>
    </>

  )

}
export default App