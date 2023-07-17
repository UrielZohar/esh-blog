import { createElement } from 'react'
import { Space } from 'antd'

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

export { IconText }