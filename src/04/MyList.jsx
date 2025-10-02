import React from 'react'
import MyListCard from './MyListCard'
import MyListData from './MyListData.json'
export default function MyList() {
    const tags = MyListData.map((item, index) => <MyListCard title={item.title} imgUrl={item.imgUrl} content={item.content} key={index}/>);
    return (
        
        <div className="grid grid-cols-1 w-8/10 lg:grid-cols-2 gap-4" >
            {/* <MyListCard title={MyListData[0].title} imgUrl={MyListData[0].imgUrl} content={MyListData[0].content} /> */}
            {tags}
        </div>
    )
}
