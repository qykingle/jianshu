import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {
  getListArea () {
    const { focused, list, page, totalPage, handleMouseEnter, handleChangePage, handleMouseLeave, mouseIn } = this.props
    const pageList = []
    const newList = list.toJS()
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (!newList[i]) {
        break
      }
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
          热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i ref={(icon) => { this.spinIcon = icon }} className='spin iconfont'>&#xe851;</i>
             换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render () {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6e4;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className='iconfont'>&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

// const Header = (props) => {
//   return (
//     <HeaderWrapper>
//       <Logo />
//       <Nav>
//         <NavItem className='left active'>首页</NavItem>
//         <NavItem className='left'>下载App</NavItem>
//         <NavItem className='right'>登录</NavItem>
//         <NavItem className='right'>
//           <i className='iconfont'>&#xe636;</i>
//         </NavItem>
//         <SearchWrapper>
//           <CSSTransition
//             in={props.focused}
//             timeout={200}
//             classNames='slide'
//           >
//             <NavSearch
//               className={props.focused ? 'focused' : ''}
//               onFocus={props.handleInputFocus}
//               onBlur={props.handleInputBlur}
//             />
//           </CSSTransition>
//           <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
//           {getListArea(props.focused)}
//         </SearchWrapper>
//       </Nav>
//       <Addition>
//         <Button className='writing'>
//           <i className='iconfont'>&#xe615;</i>
//             写文章
//         </Button>
//         <Button className='reg'>注册</Button>
//       </Addition>
//     </HeaderWrapper>
//   )
// }

// class Header extends Component {
//   render () {
//     return (
//     )
//   }
// }
const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      // console.log(list)
      // const action = {
      //   type: 'search_focus'
      // }
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      // const action = {
      //   type: 'search_blur'
      // }
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      // console.log(spin.style.transform)
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 180}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
      // let pageTemp = (++page) % totalPage
      // dispatch(actionCreators.changePage(pageTemp))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
