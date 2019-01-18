import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div.attrs({
  href: '/'
})`
  height: 56px;
  position: absolute;
  display: block;
  width: 100px;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  padding-right: 50px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  background-color: #eee;
  height: 38px;
  border: none;
  box-sizing: border-box;
  padding: 0 30px 0 20px;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
    color: #fff;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .zoom {
    position: absolute;
    right: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    bottom: 5px;
    text-align: center;
    &.focused {
      background-color: #969696;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  /* height: 100px; */
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 13px;
  color: #969696;
`

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    /* transform: rotate(0deg); */
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a`
  font-size: 12px;
  display: block;
  float: left;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`
