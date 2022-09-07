import Carousal from './Carousal'
import CSS from './content.module.css'
import { useEffect, useState } from 'react'
import { GetContent } from '../../utils/API_Calls'

const Content_section = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    const fetchContent = async () => {
      const posts = await GetContent();
      setContent(posts);
    }
    fetchContent();
  }, [])

  return (
    <section className={CSS.content_section_bg}>
      <div className="container">
        <h2 className={CSS.content_title}><span>Featured</span> Content</h2>
        {
          content.length !== 0 ?
            content.map((doc, index) => {
              return <Carousal key={index} category={doc.category} postList={doc.postList} />
            })
            : (
              <div className={CSS.contentError}>
                Error Fetching Content......
              </div>

            )
        }
      </div>
    </section>
  )
}

export default Content_section