import Carousal from './Carousal'
import CSS from './content.module.css'
import { useEffect, useState } from 'react'
import { GetContent } from '../../utils/API_Calls'

const Content_section = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    const fetchContent = async () => {
      const res = await GetContent();
      setContent(res)
    }
    fetchContent();
  }, [])


  return (
    <section className={CSS.content_section_bg}>
      <div className="container">
        <h2 className={CSS.content_title}><span>Featured</span> Content</h2>
        {
          content.map((posts) => {
            return <Carousal key={posts._id} title={posts.title} postList={posts.postList} />
          })
        }
      </div>
    </section>
  )
}

export default Content_section