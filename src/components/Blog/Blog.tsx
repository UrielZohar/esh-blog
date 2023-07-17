import React from 'react'
import { LikeOutlined } from '@ant-design/icons'
import { List } from 'antd'
import { Link } from 'react-router-dom'
import { Post } from '../../Types/Post'
import { IconText } from '../IconText/IconText'
import styles from './Blog.module.css'

const Blog: React.FC<{posts: Post[]}> = ({posts}) => (
  <List
    className={styles.blog}
    itemLayout="vertical"
    size="large"
    dataSource={posts}
    renderItem={({id, reactions, title, body}: Post, index) => (
      <List.Item
        key={id}
        actions={[
          <IconText icon={LikeOutlined} text={`${reactions}`} key="list-vertical-like-o" />,
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
          title={<Link to={`/post/${id}`}>Post #{index + 1}</Link>}
          description={title}
        />
        {body}
      </List.Item>
    )}
  />
);

export { Blog };