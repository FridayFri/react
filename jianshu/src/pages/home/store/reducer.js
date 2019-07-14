import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  }, {
    id: 2,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },
  {
    id: 3,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },
  {
    id: 4,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },
  {
    id: 5,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },
  {
    id: 6,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },
  {
    id: 7,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },
  {
    id: 8,
    title: "手绘",
    imgUrl: '//upload.jianshu.io/collections/images/1751898/crop1556407807132.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  }
  ],
  articleList: [{
    id: 1,
    title: '天安门前那根柱子，重20吨矗立500年，你知道作用是什么吗？',
    desc: '相信大家在闲暇的时候或者是有了长假期的时候，都十分乐意到各种名胜古迹参观游览，感受人文景观的同时，提升自己的情操，让自己灵魂在旅游的环境中不断得...',
    imgUrl: '//upload-images.jianshu.io/upload_images/15342126-ccd10ae8a05bad2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '天安门前那根柱子，重20吨矗立500年，你知道作用是什么吗？',
    desc: '相信大家在闲暇的时候或者是有了长假期的时候，都十分乐意到各种名胜古迹参观游览，感受人文景观的同时，提升自己的情操，让自己灵魂在旅游的环境中不断得...',
    imgUrl: '//upload-images.jianshu.io/upload_images/15342126-ccd10ae8a05bad2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '天安门前那根柱子，重20吨矗立500年，你知道作用是什么吗？',
    desc: '相信大家在闲暇的时候或者是有了长假期的时候，都十分乐意到各种名胜古迹参观游览，感受人文景观的同时，提升自己的情操，让自己灵魂在旅游的环境中不断得...',
    imgUrl: '//upload-images.jianshu.io/upload_images/15342126-ccd10ae8a05bad2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '天安门前那根柱子，重20吨矗立500年，你知道作用是什么吗？',
    desc: '相信大家在闲暇的时候或者是有了长假期的时候，都十分乐意到各种名胜古迹参观游览，感受人文景观的同时，提升自己的情操，让自己灵魂在旅游的环境中不断得...',
    imgUrl: '//upload-images.jianshu.io/upload_images/15342126-ccd10ae8a05bad2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 5,
    title: '天安门前那根柱子，重20吨矗立500年，你知道作用是什么吗？',
    desc: '相信大家在闲暇的时候或者是有了长假期的时候，都十分乐意到各种名胜古迹参观游览，感受人文景观的同时，提升自己的情操，让自己灵魂在旅游的环境中不断得...',
    imgUrl: '//upload-images.jianshu.io/upload_images/15342126-ccd10ae8a05bad2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  ],
  recommendList:[
    {
      id:'1',
      imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id:'2',
      imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id:'3',
      imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}