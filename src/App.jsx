import './App.css'
import Button from './components/buttton'
import Cards from './components/cards'

function App() {

  return (
    <>
       <div className='main'>
      <div>
        <Cards description="ye dell laptop bohot axha nai hai" title="Dell laptop 8th generatrion" imgCard="https://m.media-amazon.com/images/I/61+r3+JstZL.jpg" />
        <Cards description="hp laptop kamal ka hai very good" title="HP laptop 7th generatrion" imgCard="https://www.digitaltrends.com/wp-content/uploads/2022/10/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C720&p=1" />
        <Cards description="lenovo vip hai use karo maza aye ga" title="Lenovo laptop 6th generatrion" imgCard="https://news-cdn.softpedia.com/images/news2/microsoft-surface-laptop-3-leaked-in-high-resolution-press-photos-527652-5.jpg" />
        <Cards description="sony laptop hota hai mujy nai pata ta" title="Sony laptop 5th generatrion" imgCard="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg" />
        <Cards description="sony laptop hota hai mujy nai pata ta" title="Sony laptop 5th generatrion" imgCard="https://www.emergeagency.com/wp-content/uploads/2019/01/samsun_ativ.jpg" />
        <Cards description="sony laptop hota hai mujy nai pata ta" title="Sony laptop 5th generatrion" imgCard="https://c1.wallpaperflare.com/preview/577/507/636/woman-computer-table-work.jpg" />
        </div>
<div className='btn'>
      <Button name = "SignUp" />
      <Button name = "Login" />
      <Button name = "facebook" />
      <Button name = "Instagram" />
      <Button name = "Twitter" />
      <Button name = "Browser" />

      </div>
    </div>
    </>
  )
}

export default App
