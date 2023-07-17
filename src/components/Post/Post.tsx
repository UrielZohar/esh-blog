import { List, Tag } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { IconText } from '../IconText/IconText'
import { Post } from "../../Types/Post"
import style from './Post.module.css'

const PostComponent: React.FC<{post: Post}> = ({post}) => {

  return (
    <div>
      <List
      className={style.post}
        itemLayout="vertical"
        size="large"
        dataSource={[post]}
        renderItem={({id, reactions, title, body, tags}: Post, index) => (
          <List.Item
            key={id}
            actions={[
              <IconText icon={LikeOutlined} text={`${reactions}`} key="list-vertical-like-o" />,
              ...tags.map(tag => (
                <Tag 
                  key={tag}
                  color='gold'
                  style={{ marginRight: 3 }}
                >
                  #{tag}
                </Tag>
              )),
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title='Post'
              description={title}
            />
            {body}
          </List.Item>
        )}
      />
    </div>
  )
}

export {
  PostComponent,
}