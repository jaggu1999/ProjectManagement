import React, { Component } from 'react'
import ExpandedSearchLogo from "../SVGs/ExpandedSearchLogo";
import "../Styles/ExpandedDrawer.css"
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import firebaseInit from "../FirebaseAuthentication";

class ExpandedDrawer extends Component {

    constructor(props){
        super(props);
        this.signout = this.signout.bind(this);
    }
    signout() {
        firebaseInit.auth().signOut().then((u)=>{
            console.log(u);
            this.props.history.push("/");
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div className="ExpandedDrawer">
                <ExpandedSearchLogo></ExpandedSearchLogo>
                <a style={{marginTop:"42px", marginRight:"26px"}} href="#">
                    <svg width="184" height="32" viewBox="0 0 184 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97333 2.1333H5.86666C5.37813 2.1333 4.95786 2.1333 4.58666 2.22077C4.01202 2.35808 3.48661 2.6518 3.06865 3.06938C2.65069 3.48697 2.35649 4.01212 2.21866 4.58663C2.13333 4.95783 2.13333 5.37597 2.13333 5.86663V11.2C2.13333 11.6885 2.13333 12.1088 2.2208 12.48C2.35811 13.0546 2.65183 13.58 3.06942 13.998C3.487 14.4159 4.01215 14.7101 4.58666 14.848C4.95786 14.9333 5.376 14.9333 5.86666 14.9333H11.2C11.6885 14.9333 12.1088 14.9333 12.48 14.8458C13.0546 14.7085 13.5801 14.4148 13.998 13.9972C14.416 13.5796 14.7102 13.0545 14.848 12.48C14.9333 12.1088 14.9333 11.6906 14.9333 11.2V5.86663C14.9333 5.3781 14.9333 4.95783 14.8459 4.58663C14.7086 4.01199 14.4148 3.48658 13.9972 3.06862C13.5797 2.65066 13.0545 2.35646 12.48 2.21863C12.1088 2.1333 11.6907 2.1333 11.2 2.1333H5.97333ZM5.08373 4.2965C5.17546 4.27517 5.3184 4.26663 5.97333 4.26663H11.0933C11.7504 4.26663 11.8912 4.27303 11.9829 4.2965C12.1746 4.34233 12.3498 4.44034 12.4891 4.57967C12.6284 4.719 12.7264 4.8942 12.7723 5.08583C12.7936 5.17543 12.8 5.31623 12.8 5.9733V11.0933C12.8 11.7504 12.7936 11.8912 12.7701 11.9829C12.7243 12.1745 12.6263 12.3497 12.487 12.4891C12.3476 12.6284 12.1724 12.7264 11.9808 12.7722C11.8933 12.7914 11.7525 12.8 11.0933 12.8H5.97333C5.31626 12.8 5.17546 12.7936 5.08373 12.7701C4.89209 12.7243 4.7169 12.6263 4.57757 12.4869C4.43824 12.3476 4.34023 12.1724 4.2944 11.9808C4.2752 11.8933 4.26666 11.7525 4.26666 11.0933V5.9733C4.26666 5.31623 4.27306 5.17543 4.29653 5.0837C4.34236 4.89206 4.44037 4.71687 4.5797 4.57754C4.71903 4.43821 4.89423 4.34019 5.08587 4.29437L5.08373 4.2965ZM20.9067 2.1333H20.8C20.3115 2.1333 19.8912 2.1333 19.52 2.22077C18.9454 2.35808 18.4199 2.6518 18.002 3.06938C17.584 3.48697 17.2898 4.01212 17.152 4.58663C17.0667 4.95783 17.0667 5.37597 17.0667 5.86663V11.2C17.0667 11.6885 17.0667 12.1088 17.1541 12.48C17.2914 13.0546 17.5852 13.58 18.0027 13.998C18.4203 14.4159 18.9455 14.7101 19.52 14.848C19.8912 14.9333 20.3093 14.9333 20.8 14.9333H26.1333C26.6219 14.9333 27.0421 14.9333 27.4133 14.8458C27.988 14.7085 28.5134 14.4148 28.9313 13.9972C29.3493 13.5796 29.6435 13.0545 29.7813 12.48C29.8667 12.1088 29.8667 11.6906 29.8667 11.2V5.86663C29.8667 5.3781 29.8667 4.95783 29.7792 4.58663C29.6419 4.01199 29.3482 3.48658 28.9306 3.06862C28.513 2.65066 27.9879 2.35646 27.4133 2.21863C27.0421 2.1333 26.624 2.1333 26.1333 2.1333H20.9067ZM20.0171 4.2965C20.1088 4.27517 20.2517 4.26663 20.9067 4.26663H26.0267C26.6837 4.26663 26.8245 4.27303 26.9163 4.2965C27.1079 4.34233 27.2831 4.44034 27.4224 4.57967C27.5618 4.719 27.6598 4.8942 27.7056 5.08583C27.7269 5.17543 27.7333 5.31623 27.7333 5.9733V11.0933C27.7333 11.7504 27.7248 11.8912 27.7035 11.9829C27.6576 12.1745 27.5596 12.3497 27.4203 12.4891C27.281 12.6284 27.1058 12.7264 26.9141 12.7722C26.8245 12.7936 26.6837 12.8 26.0267 12.8H20.9067C20.2496 12.8 20.1088 12.7936 20.0171 12.7701C19.8254 12.7243 19.6502 12.6263 19.5109 12.4869C19.3716 12.3476 19.2736 12.1724 19.2277 11.9808C19.2085 11.8933 19.2 11.7525 19.2 11.0933V5.9733C19.2 5.31623 19.2064 5.17543 19.2299 5.0837C19.2757 4.89206 19.3737 4.71687 19.513 4.57754C19.6524 4.43821 19.8276 4.34019 20.0192 4.29437L20.0171 4.2965ZM5.86666 17.0666H11.2C11.6885 17.0666 12.1088 17.0666 12.48 17.1541C13.0546 17.2914 13.5801 17.5851 13.998 18.0027C14.416 18.4203 14.7102 18.9454 14.848 19.52C14.9333 19.8912 14.9333 20.3093 14.9333 20.8V26.1333C14.9333 26.6218 14.9333 27.0421 14.8459 27.4133C14.7086 27.9879 14.4148 28.5134 13.9972 28.9313C13.5797 29.3493 13.0545 29.6435 12.48 29.7813C12.1088 29.8666 11.6907 29.8666 11.2 29.8666H5.86666C5.37813 29.8666 4.95786 29.8666 4.58666 29.7792C4.01202 29.6419 3.48661 29.3481 3.06865 28.9306C2.65069 28.513 2.35649 27.9878 2.21866 27.4133C2.13333 27.0421 2.13333 26.624 2.13333 26.1333V20.8C2.13333 20.3114 2.13333 19.8912 2.2208 19.52C2.35811 18.9453 2.65183 18.4199 3.06942 18.002C3.487 17.584 4.01215 17.2898 4.58666 17.152C4.95786 17.0666 5.376 17.0666 5.86666 17.0666ZM5.97333 19.2C5.31626 19.2 5.17546 19.2064 5.08373 19.2298C4.89209 19.2757 4.7169 19.3737 4.57757 19.513C4.43824 19.6523 4.34023 19.8275 4.2944 20.0192C4.2752 20.1066 4.26666 20.2474 4.26666 20.9066V26.0266C4.26666 26.6837 4.27306 26.8245 4.29653 26.9162C4.34236 27.1079 4.44037 27.2831 4.5797 27.4224C4.71903 27.5617 4.89423 27.6597 5.08587 27.7056C5.17547 27.7269 5.31626 27.7333 5.97333 27.7333H11.0933C11.7504 27.7333 11.8912 27.7248 11.9829 27.7034C12.1746 27.6576 12.3498 27.5596 12.4891 27.4203C12.6284 27.2809 12.7264 27.1057 12.7723 26.9141C12.7936 26.8245 12.8 26.6837 12.8 26.0266V20.9066C12.8 20.2496 12.7936 20.1088 12.7701 20.017C12.7243 19.8254 12.6263 19.6502 12.487 19.5109C12.3476 19.3715 12.1724 19.2735 11.9808 19.2277C11.8933 19.2085 11.7525 19.2 11.0933 19.2H5.97333ZM20.9067 17.0666H20.8C20.3115 17.0666 19.8912 17.0666 19.52 17.1541C18.9454 17.2914 18.4199 17.5851 18.002 18.0027C17.584 18.4203 17.2898 18.9454 17.152 19.52C17.0667 19.8912 17.0667 20.3093 17.0667 20.8V26.1333C17.0667 26.6218 17.0667 27.0421 17.1541 27.4133C17.2914 27.9879 17.5852 28.5134 18.0027 28.9313C18.4203 29.3493 18.9455 29.6435 19.52 29.7813C19.8912 29.8688 20.3115 29.8688 20.8 29.8688H26.1333C26.6219 29.8688 27.0421 29.8688 27.4133 29.7813C27.9876 29.6436 28.5125 29.3498 28.9301 28.9322C29.3477 28.5146 29.6415 27.9897 29.7792 27.4154C29.8667 27.0442 29.8667 26.624 29.8667 26.1354V20.8C29.8667 20.3114 29.8667 19.8912 29.7792 19.52C29.6419 18.9453 29.3482 18.4199 28.9306 18.002C28.513 17.584 27.9879 17.2898 27.4133 17.152C27.0421 17.0666 26.624 17.0666 26.1333 17.0666H20.9067ZM20.0171 19.2298C20.1088 19.2085 20.2517 19.2 20.9067 19.2H26.0267C26.6837 19.2 26.8245 19.2064 26.9163 19.2298C27.1079 19.2757 27.2831 19.3737 27.4224 19.513C27.5618 19.6523 27.6598 19.8275 27.7056 20.0192C27.7269 20.1088 27.7333 20.2496 27.7333 20.9066V26.0266C27.7333 26.6837 27.7248 26.8245 27.7035 26.9162C27.6576 27.1079 27.5596 27.2831 27.4203 27.4224C27.281 27.5617 27.1058 27.6597 26.9141 27.7056C26.8245 27.7269 26.6837 27.7333 26.0267 27.7333H20.9067C20.2496 27.7333 20.1088 27.7248 20.0171 27.7034C19.8254 27.6576 19.6502 27.5596 19.5109 27.4203C19.3716 27.2809 19.2736 27.1057 19.2277 26.9141C19.2085 26.8266 19.2 26.6858 19.2 26.0266V20.9066C19.2 20.2496 19.2064 20.1088 19.2299 20.017C19.2757 19.8254 19.3737 19.6502 19.513 19.5109C19.6524 19.3715 19.8276 19.2735 20.0192 19.2277L20.0171 19.2298Z" fill="#4A2849"/>
                        <path d="M57.24 6.816H62.712C63.976 6.816 65.096 7.008 66.072 7.392C67.048 7.76 67.864 8.28 68.52 8.952C69.176 9.608 69.672 10.4 70.008 11.328C70.344 12.24 70.512 13.248 70.512 14.352C70.512 15.632 70.272 16.856 69.792 18.024C69.328 19.176 68.648 20.2 67.752 21.096C66.872 21.976 65.8 22.68 64.536 23.208C63.272 23.736 61.84 24 60.24 24H54.192L57.24 6.816ZM60.408 20.928C61.432 20.928 62.368 20.768 63.216 20.448C64.064 20.128 64.784 19.688 65.376 19.128C65.984 18.568 66.448 17.912 66.768 17.16C67.104 16.408 67.272 15.592 67.272 14.712C67.272 13.16 66.864 11.968 66.048 11.136C65.248 10.304 64.024 9.888 62.376 9.888H59.928L57.96 20.928H60.408ZM79.41 11.856C81.026 11.856 82.258 12.24 83.106 13.008C83.954 13.776 84.378 14.784 84.378 16.032C84.378 16.224 84.362 16.424 84.33 16.632C84.314 16.824 84.29 17.032 84.258 17.256L83.058 24H79.962L80.178 22.752H79.986C79.618 23.216 79.154 23.608 78.594 23.928C78.05 24.232 77.386 24.384 76.602 24.384C76.01 24.384 75.466 24.288 74.97 24.096C74.49 23.92 74.074 23.672 73.722 23.352C73.386 23.016 73.122 22.624 72.93 22.176C72.738 21.712 72.642 21.216 72.642 20.688C72.642 20.016 72.77 19.416 73.026 18.888C73.298 18.36 73.674 17.912 74.154 17.544C74.65 17.16 75.234 16.872 75.906 16.68C76.594 16.472 77.346 16.368 78.162 16.368C78.754 16.368 79.29 16.424 79.77 16.536C80.266 16.632 80.738 16.76 81.186 16.92L81.282 16.56C81.314 16.4 81.33 16.272 81.33 16.176C81.33 15.664 81.114 15.24 80.682 14.904C80.266 14.568 79.714 14.4 79.026 14.4C78.418 14.4 77.882 14.52 77.418 14.76C76.954 14.984 76.538 15.312 76.17 15.744L74.058 14.208C74.698 13.392 75.482 12.8 76.41 12.432C77.338 12.048 78.338 11.856 79.41 11.856ZM77.634 21.936C78.034 21.936 78.41 21.864 78.762 21.72C79.13 21.56 79.45 21.36 79.722 21.12C80.01 20.864 80.242 20.576 80.418 20.256C80.61 19.92 80.738 19.576 80.802 19.224C80.562 19.112 80.218 18.992 79.77 18.864C79.338 18.72 78.834 18.648 78.258 18.648C77.586 18.648 77.01 18.8 76.53 19.104C76.05 19.392 75.81 19.84 75.81 20.448C75.81 20.944 75.986 21.32 76.338 21.576C76.706 21.816 77.138 21.936 77.634 21.936ZM91.1766 24.384C90.4566 24.384 89.8086 24.296 89.2326 24.12C88.6566 23.944 88.1526 23.704 87.7206 23.4C87.3046 23.096 86.9526 22.744 86.6646 22.344C86.3926 21.928 86.1846 21.488 86.0406 21.024L88.9446 19.848C89.0726 20.456 89.3606 20.904 89.8086 21.192C90.2726 21.48 90.8086 21.624 91.4166 21.624C91.9606 21.624 92.4166 21.528 92.7846 21.336C93.1686 21.128 93.3606 20.84 93.3606 20.472C93.3606 20.152 93.2326 19.896 92.9766 19.704C92.7206 19.496 92.3126 19.32 91.7526 19.176L90.4806 18.864C90.1126 18.768 89.7446 18.632 89.3766 18.456C89.0086 18.28 88.6806 18.056 88.3926 17.784C88.1046 17.512 87.8646 17.192 87.6726 16.824C87.4966 16.456 87.4086 16.04 87.4086 15.576C87.4086 14.984 87.5366 14.464 87.7926 14.016C88.0646 13.552 88.4326 13.16 88.8966 12.84C89.3606 12.52 89.9046 12.28 90.5286 12.12C91.1526 11.944 91.8326 11.856 92.5686 11.856C94.9206 11.856 96.4806 12.8 97.2486 14.688L94.3686 15.744C94.2406 15.312 93.9846 14.984 93.6006 14.76C93.2166 14.52 92.7846 14.4 92.3046 14.4C91.7446 14.4 91.3126 14.496 91.0086 14.688C90.7046 14.864 90.5526 15.104 90.5526 15.408C90.5526 15.92 90.9926 16.288 91.8726 16.512L93.5286 16.944C94.5366 17.2 95.2886 17.616 95.7846 18.192C96.2966 18.768 96.5526 19.432 96.5526 20.184C96.5526 20.84 96.4166 21.432 96.1446 21.96C95.8726 22.472 95.4966 22.912 95.0166 23.28C94.5366 23.632 93.9686 23.904 93.3126 24.096C92.6566 24.288 91.9446 24.384 91.1766 24.384ZM104.314 11.64L103.738 13.776H103.93C104.362 13.168 104.914 12.696 105.586 12.36C106.258 12.024 107.002 11.856 107.818 11.856C108.458 11.856 109.01 11.96 109.474 12.168C109.938 12.36 110.322 12.624 110.626 12.96C110.946 13.296 111.178 13.688 111.322 14.136C111.482 14.584 111.562 15.056 111.562 15.552C111.562 15.92 111.514 16.392 111.418 16.968L110.17 24H107.026L108.226 17.256C108.274 16.968 108.298 16.736 108.298 16.56C108.298 16.048 108.146 15.624 107.842 15.288C107.538 14.936 107.09 14.76 106.498 14.76C106.018 14.76 105.586 14.856 105.202 15.048C104.834 15.224 104.506 15.472 104.218 15.792C103.946 16.096 103.722 16.464 103.546 16.896C103.37 17.312 103.242 17.768 103.162 18.264L102.154 24H99.0101L102.034 6.816H105.178L104.314 11.64ZM120.999 24.384C120.135 24.384 119.391 24.216 118.767 23.88C118.159 23.528 117.695 23.096 117.375 22.584H117.183L116.943 24H113.991L117.015 6.816H120.159L119.247 11.976L118.767 13.656H118.959C119.279 13.208 119.743 12.8 120.351 12.432C120.959 12.048 121.735 11.856 122.679 11.856C123.351 11.856 123.975 11.984 124.551 12.24C125.143 12.496 125.655 12.864 126.087 13.344C126.535 13.808 126.887 14.376 127.143 15.048C127.399 15.72 127.527 16.48 127.527 17.328C127.527 18.32 127.351 19.248 126.999 20.112C126.663 20.96 126.199 21.704 125.607 22.344C125.015 22.984 124.319 23.488 123.519 23.856C122.735 24.208 121.895 24.384 120.999 24.384ZM120.711 21.48C121.207 21.48 121.679 21.384 122.127 21.192C122.575 20.984 122.959 20.712 123.279 20.376C123.615 20.024 123.879 19.624 124.071 19.176C124.263 18.712 124.359 18.216 124.359 17.688C124.359 16.808 124.111 16.104 123.615 15.576C123.135 15.032 122.463 14.76 121.599 14.76C121.023 14.76 120.503 14.872 120.039 15.096C119.591 15.304 119.207 15.592 118.887 15.96C118.567 16.312 118.319 16.72 118.143 17.184C117.983 17.648 117.903 18.136 117.903 18.648C117.903 19.112 117.975 19.52 118.119 19.872C118.279 20.224 118.487 20.52 118.743 20.76C118.999 21 119.295 21.184 119.631 21.312C119.967 21.424 120.327 21.48 120.711 21.48ZM137.022 11.856C137.87 11.856 138.638 12 139.326 12.288C140.03 12.576 140.622 12.968 141.102 13.464C141.598 13.96 141.974 14.544 142.23 15.216C142.502 15.872 142.638 16.576 142.638 17.328C142.638 18.32 142.462 19.248 142.11 20.112C141.758 20.976 141.262 21.728 140.622 22.368C139.998 22.992 139.246 23.488 138.366 23.856C137.486 24.208 136.526 24.384 135.486 24.384C134.638 24.384 133.862 24.24 133.158 23.952C132.47 23.664 131.878 23.272 131.382 22.776C130.902 22.28 130.526 21.704 130.254 21.048C129.998 20.376 129.87 19.656 129.87 18.888C129.87 17.896 130.046 16.976 130.398 16.128C130.75 15.264 131.238 14.52 131.862 13.896C132.502 13.256 133.262 12.76 134.142 12.408C135.022 12.04 135.982 11.856 137.022 11.856ZM135.798 21.48C136.326 21.48 136.814 21.384 137.262 21.192C137.71 20.984 138.102 20.704 138.438 20.352C138.774 20 139.03 19.6 139.206 19.152C139.398 18.688 139.494 18.192 139.494 17.664C139.494 17.248 139.422 16.864 139.278 16.512C139.134 16.144 138.934 15.832 138.678 15.576C138.438 15.32 138.142 15.12 137.79 14.976C137.454 14.832 137.094 14.76 136.71 14.76C136.182 14.76 135.694 14.864 135.246 15.072C134.798 15.264 134.406 15.536 134.07 15.888C133.734 16.24 133.47 16.648 133.278 17.112C133.102 17.56 133.014 18.048 133.014 18.576C133.014 18.992 133.086 19.384 133.23 19.752C133.374 20.104 133.574 20.408 133.83 20.664C134.086 20.92 134.382 21.12 134.718 21.264C135.054 21.408 135.414 21.48 135.798 21.48ZM151.738 11.856C153.354 11.856 154.586 12.24 155.434 13.008C156.282 13.776 156.706 14.784 156.706 16.032C156.706 16.224 156.69 16.424 156.658 16.632C156.642 16.824 156.618 17.032 156.586 17.256L155.386 24H152.29L152.506 22.752H152.314C151.946 23.216 151.482 23.608 150.922 23.928C150.378 24.232 149.714 24.384 148.93 24.384C148.338 24.384 147.794 24.288 147.298 24.096C146.818 23.92 146.402 23.672 146.05 23.352C145.714 23.016 145.45 22.624 145.258 22.176C145.066 21.712 144.97 21.216 144.97 20.688C144.97 20.016 145.098 19.416 145.354 18.888C145.626 18.36 146.002 17.912 146.482 17.544C146.978 17.16 147.562 16.872 148.234 16.68C148.922 16.472 149.674 16.368 150.49 16.368C151.082 16.368 151.618 16.424 152.098 16.536C152.594 16.632 153.066 16.76 153.514 16.92L153.61 16.56C153.642 16.4 153.658 16.272 153.658 16.176C153.658 15.664 153.442 15.24 153.01 14.904C152.594 14.568 152.042 14.4 151.354 14.4C150.746 14.4 150.21 14.52 149.746 14.76C149.282 14.984 148.866 15.312 148.498 15.744L146.386 14.208C147.026 13.392 147.81 12.8 148.738 12.432C149.666 12.048 150.666 11.856 151.738 11.856ZM149.962 21.936C150.362 21.936 150.738 21.864 151.09 21.72C151.458 21.56 151.778 21.36 152.05 21.12C152.338 20.864 152.57 20.576 152.746 20.256C152.938 19.92 153.066 19.576 153.13 19.224C152.89 19.112 152.546 18.992 152.098 18.864C151.666 18.72 151.162 18.648 150.586 18.648C149.914 18.648 149.338 18.8 148.858 19.104C148.378 19.392 148.138 19.84 148.138 20.448C148.138 20.944 148.314 21.32 148.666 21.576C149.034 21.816 149.466 21.936 149.962 21.936ZM158.654 24L160.718 12.24H163.67L163.382 13.872H163.574C163.958 13.312 164.454 12.848 165.062 12.48C165.67 12.096 166.382 11.904 167.198 11.904C167.614 11.904 167.95 11.944 168.206 12.024C168.478 12.104 168.71 12.208 168.902 12.336L167.726 15.192C167.55 15.112 167.342 15.04 167.102 14.976C166.878 14.912 166.598 14.88 166.262 14.88C165.35 14.88 164.582 15.2 163.958 15.84C163.35 16.464 162.958 17.288 162.782 18.312L161.798 24H158.654ZM174.037 24.384C173.333 24.384 172.685 24.248 172.093 23.976C171.501 23.704 170.989 23.32 170.557 22.824C170.125 22.328 169.789 21.744 169.549 21.072C169.309 20.384 169.189 19.64 169.189 18.84C169.189 17.912 169.349 17.032 169.669 16.2C169.989 15.352 170.445 14.608 171.037 13.968C171.629 13.328 172.325 12.816 173.125 12.432C173.941 12.048 174.845 11.856 175.837 11.856C176.621 11.856 177.333 12.032 177.973 12.384C178.629 12.72 179.093 13.144 179.365 13.656H179.557L179.629 11.976L180.541 6.816H183.661L180.637 24H177.709L177.949 22.584H177.757C177.437 23.048 176.973 23.464 176.365 23.832C175.773 24.2 174.997 24.384 174.037 24.384ZM175.933 14.76C175.405 14.76 174.917 14.864 174.469 15.072C174.037 15.28 173.661 15.56 173.341 15.912C173.021 16.264 172.773 16.672 172.597 17.136C172.421 17.6 172.333 18.088 172.333 18.6C172.333 19.48 172.597 20.184 173.125 20.712C173.653 21.224 174.349 21.48 175.213 21.48C175.677 21.48 176.125 21.384 176.557 21.192C176.989 21 177.365 20.736 177.685 20.4C178.021 20.064 178.285 19.656 178.477 19.176C178.685 18.696 178.789 18.168 178.789 17.592C178.789 16.728 178.525 16.04 177.997 15.528C177.469 15.016 176.781 14.76 175.933 14.76Z" fill="#4A2849"/>
                    </svg>
                </a>
                <a style={{marginTop:"42px", marginRight:"21px"}} href="#">
                    <svg width="189" height="32" viewBox="0 0 189 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#4A2849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 10.6667V21.3334" stroke="#4A2849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.6667 16H21.3333" stroke="#4A2849" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M69.936 21.288C69.392 21.848 68.848 22.32 68.304 22.704C67.76 23.088 67.192 23.408 66.6 23.664C66.008 23.92 65.376 24.104 64.704 24.216C64.032 24.328 63.304 24.384 62.52 24.384C61.432 24.384 60.416 24.2 59.472 23.832C58.528 23.464 57.704 22.936 57 22.248C56.296 21.56 55.736 20.728 55.32 19.752C54.92 18.76 54.72 17.648 54.72 16.416C54.72 15.072 54.976 13.8 55.488 12.6C56 11.384 56.712 10.32 57.624 9.408C58.536 8.496 59.624 7.776 60.888 7.248C62.152 6.704 63.544 6.432 65.064 6.432C66.52 6.432 67.768 6.696 68.808 7.224C69.848 7.752 70.68 8.472 71.304 9.384L68.712 11.496C68.248 10.872 67.696 10.384 67.056 10.032C66.416 9.68 65.608 9.504 64.632 9.504C63.72 9.504 62.864 9.68 62.064 10.032C61.264 10.384 60.56 10.864 59.952 11.472C59.344 12.08 58.864 12.792 58.512 13.608C58.16 14.424 57.984 15.304 57.984 16.248C57.984 17.016 58.104 17.712 58.344 18.336C58.6 18.96 58.944 19.496 59.376 19.944C59.808 20.376 60.32 20.712 60.912 20.952C61.504 21.192 62.152 21.312 62.856 21.312C63.88 21.312 64.792 21.104 65.592 20.688C66.392 20.256 67.152 19.68 67.872 18.96L69.936 21.288ZM72.4226 24L74.4866 12.24H77.4386L77.1506 13.872H77.3426C77.7266 13.312 78.2226 12.848 78.8306 12.48C79.4386 12.096 80.1506 11.904 80.9666 11.904C81.3826 11.904 81.7186 11.944 81.9746 12.024C82.2466 12.104 82.4786 12.208 82.6706 12.336L81.4946 15.192C81.3186 15.112 81.1106 15.04 80.8706 14.976C80.6466 14.912 80.3666 14.88 80.0306 14.88C79.1186 14.88 78.3506 15.2 77.7266 15.84C77.1186 16.464 76.7266 17.288 76.5506 18.312L75.5666 24H72.4226ZM94.4055 21.12C93.7175 22.144 92.9095 22.944 91.9815 23.52C91.0535 24.096 89.8935 24.384 88.5015 24.384C87.6375 24.384 86.8615 24.24 86.1735 23.952C85.5015 23.664 84.9255 23.272 84.4455 22.776C83.9655 22.264 83.5975 21.672 83.3415 21C83.0855 20.312 82.9575 19.584 82.9575 18.816C82.9575 17.904 83.1255 17.032 83.4615 16.2C83.7975 15.368 84.2695 14.632 84.8775 13.992C85.4855 13.336 86.2215 12.816 87.0855 12.432C87.9495 12.048 88.9095 11.856 89.9655 11.856C90.8295 11.856 91.5815 11.992 92.2215 12.264C92.8775 12.52 93.4215 12.872 93.8535 13.32C94.3015 13.768 94.6375 14.288 94.8615 14.88C95.0855 15.472 95.1975 16.096 95.1975 16.752C95.1975 17.504 95.0855 18.2 94.8615 18.84H86.0055V19.08C86.0375 19.944 86.3175 20.584 86.8455 21C87.3895 21.4 88.0215 21.6 88.7415 21.6C89.5095 21.6 90.1575 21.456 90.6855 21.168C91.2135 20.864 91.6615 20.432 92.0295 19.872L94.4055 21.12ZM92.2695 16.608V16.512C92.2695 15.968 92.0535 15.488 91.6215 15.072C91.2055 14.64 90.5655 14.424 89.7015 14.424C88.9175 14.424 88.2295 14.64 87.6375 15.072C87.0615 15.488 86.6615 16 86.4375 16.608H92.2695ZM104.451 11.856C106.067 11.856 107.299 12.24 108.147 13.008C108.995 13.776 109.419 14.784 109.419 16.032C109.419 16.224 109.403 16.424 109.371 16.632C109.355 16.824 109.331 17.032 109.299 17.256L108.099 24H105.003L105.219 22.752H105.027C104.659 23.216 104.195 23.608 103.635 23.928C103.091 24.232 102.427 24.384 101.643 24.384C101.051 24.384 100.507 24.288 100.011 24.096C99.5306 23.92 99.1146 23.672 98.7626 23.352C98.4266 23.016 98.1626 22.624 97.9706 22.176C97.7786 21.712 97.6826 21.216 97.6826 20.688C97.6826 20.016 97.8106 19.416 98.0666 18.888C98.3386 18.36 98.7146 17.912 99.1946 17.544C99.6906 17.16 100.275 16.872 100.947 16.68C101.635 16.472 102.387 16.368 103.203 16.368C103.795 16.368 104.331 16.424 104.811 16.536C105.307 16.632 105.779 16.76 106.227 16.92L106.323 16.56C106.355 16.4 106.371 16.272 106.371 16.176C106.371 15.664 106.155 15.24 105.723 14.904C105.307 14.568 104.755 14.4 104.067 14.4C103.459 14.4 102.923 14.52 102.459 14.76C101.995 14.984 101.579 15.312 101.211 15.744L99.0986 14.208C99.7386 13.392 100.523 12.8 101.451 12.432C102.379 12.048 103.379 11.856 104.451 11.856ZM102.675 21.936C103.075 21.936 103.451 21.864 103.803 21.72C104.171 21.56 104.491 21.36 104.763 21.12C105.051 20.864 105.283 20.576 105.459 20.256C105.651 19.92 105.779 19.576 105.843 19.224C105.603 19.112 105.259 18.992 104.811 18.864C104.379 18.72 103.875 18.648 103.299 18.648C102.627 18.648 102.051 18.8 101.571 19.104C101.091 19.392 100.851 19.84 100.851 20.448C100.851 20.944 101.027 21.32 101.379 21.576C101.747 21.816 102.179 21.936 102.675 21.936ZM116.58 24.192C115.556 24.192 114.716 23.92 114.06 23.376C113.404 22.832 113.076 22 113.076 20.88C113.076 20.704 113.084 20.52 113.1 20.328C113.116 20.12 113.148 19.88 113.196 19.608L114.012 14.928H111.948L112.428 12.24H114.492L115.14 8.64H118.284L117.636 12.24H120.516L120.06 14.928H117.156L116.364 19.464C116.332 19.624 116.316 19.728 116.316 19.776C116.316 19.84 116.316 19.92 116.316 20.016C116.316 20.352 116.396 20.64 116.556 20.88C116.732 21.104 117.028 21.216 117.444 21.216C117.7 21.216 117.908 21.192 118.068 21.144C118.244 21.08 118.412 21 118.572 20.904L119.052 23.76C118.732 23.904 118.372 24.008 117.972 24.072C117.572 24.152 117.108 24.192 116.58 24.192ZM133.584 21.12C132.896 22.144 132.088 22.944 131.16 23.52C130.232 24.096 129.072 24.384 127.68 24.384C126.816 24.384 126.04 24.24 125.352 23.952C124.68 23.664 124.104 23.272 123.624 22.776C123.144 22.264 122.776 21.672 122.52 21C122.264 20.312 122.136 19.584 122.136 18.816C122.136 17.904 122.304 17.032 122.64 16.2C122.976 15.368 123.448 14.632 124.056 13.992C124.664 13.336 125.4 12.816 126.264 12.432C127.128 12.048 128.088 11.856 129.144 11.856C130.008 11.856 130.76 11.992 131.4 12.264C132.056 12.52 132.6 12.872 133.032 13.32C133.48 13.768 133.816 14.288 134.04 14.88C134.264 15.472 134.376 16.096 134.376 16.752C134.376 17.504 134.264 18.2 134.04 18.84H125.184V19.08C125.216 19.944 125.496 20.584 126.024 21C126.568 21.4 127.2 21.6 127.92 21.6C128.688 21.6 129.336 21.456 129.864 21.168C130.392 20.864 130.84 20.432 131.208 19.872L133.584 21.12ZM131.448 16.608V16.512C131.448 15.968 131.232 15.488 130.8 15.072C130.384 14.64 129.744 14.424 128.88 14.424C128.096 14.424 127.408 14.64 126.816 15.072C126.24 15.488 125.84 16 125.616 16.608H131.448ZM146.265 6.816H152.361C153.193 6.816 153.929 6.936 154.569 7.176C155.209 7.4 155.745 7.704 156.177 8.088C156.609 8.472 156.937 8.92 157.161 9.432C157.385 9.944 157.497 10.48 157.497 11.04C157.497 11.6 157.409 12.104 157.233 12.552C157.073 12.984 156.857 13.368 156.585 13.704C156.313 14.024 155.993 14.296 155.625 14.52C155.257 14.728 154.881 14.888 154.497 15L154.449 15.192C155.073 15.48 155.609 15.912 156.057 16.488C156.505 17.064 156.729 17.792 156.729 18.672C156.729 19.488 156.561 20.224 156.225 20.88C155.889 21.536 155.425 22.096 154.833 22.56C154.241 23.024 153.545 23.384 152.745 23.64C151.961 23.88 151.105 24 150.177 24H143.217L146.265 6.816ZM151.521 13.824C152.337 13.824 152.993 13.64 153.489 13.272C154.001 12.888 154.257 12.336 154.257 11.616C154.257 11.056 154.081 10.6 153.729 10.248C153.377 9.896 152.881 9.72 152.241 9.72H148.977L148.257 13.824H151.521ZM150.585 21.048C150.969 21.048 151.337 21 151.689 20.904C152.041 20.792 152.345 20.64 152.601 20.448C152.873 20.24 153.081 19.992 153.225 19.704C153.385 19.4 153.465 19.056 153.465 18.672C153.465 18.064 153.273 17.568 152.889 17.184C152.505 16.8 151.937 16.608 151.185 16.608H147.753L146.985 21.048H150.585ZM167.599 22.464H167.407C166.991 23.072 166.447 23.544 165.775 23.88C165.103 24.216 164.359 24.384 163.543 24.384C162.935 24.384 162.399 24.28 161.935 24.072C161.471 23.88 161.079 23.616 160.759 23.28C160.439 22.944 160.199 22.552 160.039 22.104C159.879 21.64 159.799 21.152 159.799 20.64C159.799 20.416 159.807 20.192 159.823 19.968C159.839 19.744 159.871 19.48 159.919 19.176L161.167 12.24H164.287L163.087 18.984C163.071 19.08 163.055 19.184 163.039 19.296C163.039 19.392 163.039 19.528 163.039 19.704C163.039 20.216 163.191 20.64 163.495 20.976C163.799 21.312 164.255 21.48 164.863 21.48C165.343 21.48 165.767 21.392 166.135 21.216C166.503 21.04 166.823 20.8 167.095 20.496C167.367 20.176 167.591 19.808 167.767 19.392C167.943 18.96 168.079 18.496 168.175 18L169.183 12.24H172.327L170.263 24H167.311L167.599 22.464ZM179.199 29.568C178.415 29.568 177.719 29.464 177.111 29.256C176.503 29.048 175.975 28.776 175.527 28.44C175.095 28.104 174.743 27.72 174.471 27.288C174.199 26.856 174.007 26.424 173.895 25.992L176.967 24.864C177.095 25.488 177.375 25.96 177.807 26.28C178.255 26.616 178.799 26.784 179.439 26.784C181.551 26.784 182.815 25.672 183.231 23.448L183.399 22.464H183.207C182.855 22.992 182.367 23.4 181.743 23.688C181.119 23.976 180.415 24.12 179.631 24.12C178.943 24.12 178.303 23.992 177.711 23.736C177.119 23.48 176.607 23.12 176.175 22.656C175.743 22.192 175.399 21.632 175.143 20.976C174.903 20.304 174.783 19.56 174.783 18.744C174.783 17.912 174.927 17.088 175.215 16.272C175.519 15.44 175.951 14.696 176.511 14.04C177.071 13.384 177.751 12.856 178.551 12.456C179.367 12.056 180.295 11.856 181.335 11.856C182.135 11.856 182.831 12.008 183.423 12.312C184.015 12.6 184.471 13 184.791 13.512H184.983L185.199 12.24H188.223L186.183 23.784C185.847 25.688 185.087 27.128 183.903 28.104C182.735 29.08 181.167 29.568 179.199 29.568ZM180.639 21.288C181.119 21.288 181.575 21.192 182.007 21C182.439 20.808 182.815 20.536 183.135 20.184C183.471 19.832 183.735 19.424 183.927 18.96C184.135 18.48 184.239 17.952 184.239 17.376C184.239 16.944 184.159 16.56 183.999 16.224C183.855 15.888 183.655 15.608 183.399 15.384C183.159 15.16 182.871 14.992 182.535 14.88C182.215 14.768 181.887 14.712 181.551 14.712C181.023 14.712 180.535 14.824 180.087 15.048C179.639 15.256 179.255 15.536 178.935 15.888C178.615 16.24 178.367 16.648 178.191 17.112C178.015 17.56 177.927 18.032 177.927 18.528C177.927 19.44 178.191 20.128 178.719 20.592C179.247 21.056 179.887 21.288 180.639 21.288Z" fill="#4A2849"/>
                    </svg>
                </a>
                <button onClick={this.signout} style={{position:"absolute", bottom:"108px",left:"37px", backgroundColor:"transparent", border:"none"}}>
                    <svg width="138" height="32" viewBox="0 0 138 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.125 22.875H24.9281C24.7781 22.875 24.6375 22.9407 24.5437 23.0563C24.325 23.3219 24.0906 23.5782 23.8437 23.8219C22.834 24.8326 21.638 25.6381 20.3219 26.1938C18.9583 26.7697 17.4927 27.0652 16.0125 27.0625C14.5156 27.0625 13.0656 26.7688 11.7031 26.1938C10.387 25.6381 9.19095 24.8326 8.18124 23.8219C7.16973 22.8146 6.36317 21.6207 5.80624 20.3063C5.22812 18.9438 4.93749 17.4969 4.93749 16C4.93749 14.5032 5.23124 13.0563 5.80624 11.6938C6.36249 10.3782 7.16249 9.1938 8.18124 8.17817C9.19999 7.16255 10.3844 6.36255 11.7031 5.8063C13.0656 5.2313 14.5156 4.93755 16.0125 4.93755C17.5094 4.93755 18.9594 5.22817 20.3219 5.8063C21.6406 6.36255 22.825 7.16255 23.8437 8.17817C24.0906 8.42505 24.3219 8.6813 24.5437 8.9438C24.6375 9.05942 24.7812 9.12505 24.9281 9.12505H27.125C27.3219 9.12505 27.4437 8.9063 27.3344 8.74067C24.9375 5.01567 20.7437 2.55005 15.9781 2.56255C8.49062 2.5813 2.48749 8.65942 2.56249 16.1375C2.63749 23.4969 8.63124 29.4375 16.0125 29.4375C20.7656 29.4375 24.9406 26.975 27.3344 23.2594C27.4406 23.0938 27.3219 22.875 27.125 22.875ZM29.9031 15.8032L25.4687 12.3032C25.3031 12.1719 25.0625 12.2907 25.0625 12.5V14.875H15.25C15.1125 14.875 15 14.9875 15 15.125V16.875C15 17.0125 15.1125 17.125 15.25 17.125H25.0625V19.5C25.0625 19.7094 25.3062 19.8282 25.4687 19.6969L29.9031 16.1969C29.933 16.1735 29.9572 16.1437 29.9738 16.1095C29.9904 16.0754 29.999 16.038 29.999 16C29.999 15.9621 29.9904 15.9247 29.9738 15.8905C29.9572 15.8564 29.933 15.8266 29.9031 15.8032Z" fill="#4A2849"/>
                        <path d="M57.24 5.816H60.48L57.96 19.928H65.256L64.704 23H54.192L57.24 5.816ZM75.2923 10.856C76.1403 10.856 76.9083 11 77.5963 11.288C78.3003 11.576 78.8923 11.968 79.3723 12.464C79.8683 12.96 80.2443 13.544 80.5003 14.216C80.7723 14.872 80.9083 15.576 80.9083 16.328C80.9083 17.32 80.7323 18.248 80.3803 19.112C80.0283 19.976 79.5323 20.728 78.8923 21.368C78.2683 21.992 77.5163 22.488 76.6363 22.856C75.7563 23.208 74.7963 23.384 73.7563 23.384C72.9083 23.384 72.1323 23.24 71.4283 22.952C70.7403 22.664 70.1483 22.272 69.6523 21.776C69.1723 21.28 68.7963 20.704 68.5243 20.048C68.2683 19.376 68.1403 18.656 68.1403 17.888C68.1403 16.896 68.3163 15.976 68.6683 15.128C69.0203 14.264 69.5083 13.52 70.1323 12.896C70.7723 12.256 71.5323 11.76 72.4123 11.408C73.2923 11.04 74.2523 10.856 75.2923 10.856ZM74.0683 20.48C74.5963 20.48 75.0843 20.384 75.5323 20.192C75.9803 19.984 76.3723 19.704 76.7083 19.352C77.0443 19 77.3003 18.6 77.4763 18.152C77.6683 17.688 77.7643 17.192 77.7643 16.664C77.7643 16.248 77.6923 15.864 77.5483 15.512C77.4043 15.144 77.2043 14.832 76.9483 14.576C76.7083 14.32 76.4123 14.12 76.0603 13.976C75.7243 13.832 75.3643 13.76 74.9803 13.76C74.4523 13.76 73.9643 13.864 73.5163 14.072C73.0683 14.264 72.6763 14.536 72.3403 14.888C72.0043 15.24 71.7403 15.648 71.5483 16.112C71.3723 16.56 71.2843 17.048 71.2843 17.576C71.2843 17.992 71.3563 18.384 71.5003 18.752C71.6443 19.104 71.8443 19.408 72.1003 19.664C72.3563 19.92 72.6523 20.12 72.9883 20.264C73.3243 20.408 73.6843 20.48 74.0683 20.48ZM88.0644 28.568C87.2804 28.568 86.5844 28.464 85.9764 28.256C85.3684 28.048 84.8404 27.776 84.3924 27.44C83.9604 27.104 83.6084 26.72 83.3364 26.288C83.0644 25.856 82.8724 25.424 82.7604 24.992L85.8324 23.864C85.9604 24.488 86.2404 24.96 86.6724 25.28C87.1204 25.616 87.6644 25.784 88.3044 25.784C90.4164 25.784 91.6804 24.672 92.0964 22.448L92.2644 21.464H92.0724C91.7204 21.992 91.2324 22.4 90.6084 22.688C89.9844 22.976 89.2804 23.12 88.4964 23.12C87.8084 23.12 87.1684 22.992 86.5764 22.736C85.9844 22.48 85.4724 22.12 85.0404 21.656C84.6084 21.192 84.2644 20.632 84.0084 19.976C83.7684 19.304 83.6484 18.56 83.6484 17.744C83.6484 16.912 83.7924 16.088 84.0804 15.272C84.3844 14.44 84.8164 13.696 85.3764 13.04C85.9364 12.384 86.6164 11.856 87.4164 11.456C88.2324 11.056 89.1604 10.856 90.2004 10.856C91.0004 10.856 91.6964 11.008 92.2884 11.312C92.8804 11.6 93.3364 12 93.6564 12.512H93.8484L94.0644 11.24H97.0884L95.0484 22.784C94.7124 24.688 93.9524 26.128 92.7684 27.104C91.6004 28.08 90.0324 28.568 88.0644 28.568ZM89.5044 20.288C89.9844 20.288 90.4404 20.192 90.8724 20C91.3044 19.808 91.6804 19.536 92.0004 19.184C92.3364 18.832 92.6004 18.424 92.7924 17.96C93.0004 17.48 93.1044 16.952 93.1044 16.376C93.1044 15.944 93.0244 15.56 92.8644 15.224C92.7204 14.888 92.5204 14.608 92.2644 14.384C92.0244 14.16 91.7364 13.992 91.4004 13.88C91.0804 13.768 90.7524 13.712 90.4164 13.712C89.8884 13.712 89.4004 13.824 88.9524 14.048C88.5044 14.256 88.1204 14.536 87.8004 14.888C87.4804 15.24 87.2324 15.648 87.0564 16.112C86.8804 16.56 86.7924 17.032 86.7924 17.528C86.7924 18.44 87.0564 19.128 87.5844 19.592C88.1124 20.056 88.7524 20.288 89.5044 20.288ZM105.724 10.856C106.572 10.856 107.34 11 108.028 11.288C108.732 11.576 109.324 11.968 109.804 12.464C110.3 12.96 110.676 13.544 110.932 14.216C111.204 14.872 111.34 15.576 111.34 16.328C111.34 17.32 111.164 18.248 110.812 19.112C110.46 19.976 109.964 20.728 109.324 21.368C108.7 21.992 107.948 22.488 107.068 22.856C106.188 23.208 105.228 23.384 104.188 23.384C103.34 23.384 102.564 23.24 101.86 22.952C101.172 22.664 100.58 22.272 100.084 21.776C99.6036 21.28 99.2276 20.704 98.9556 20.048C98.6996 19.376 98.5716 18.656 98.5716 17.888C98.5716 16.896 98.7476 15.976 99.0996 15.128C99.4516 14.264 99.9396 13.52 100.564 12.896C101.204 12.256 101.964 11.76 102.844 11.408C103.724 11.04 104.684 10.856 105.724 10.856ZM104.5 20.48C105.028 20.48 105.516 20.384 105.964 20.192C106.412 19.984 106.804 19.704 107.14 19.352C107.476 19 107.732 18.6 107.908 18.152C108.1 17.688 108.196 17.192 108.196 16.664C108.196 16.248 108.124 15.864 107.98 15.512C107.836 15.144 107.636 14.832 107.38 14.576C107.14 14.32 106.844 14.12 106.492 13.976C106.156 13.832 105.796 13.76 105.412 13.76C104.884 13.76 104.396 13.864 103.948 14.072C103.5 14.264 103.108 14.536 102.772 14.888C102.436 15.24 102.172 15.648 101.98 16.112C101.804 16.56 101.716 17.048 101.716 17.576C101.716 17.992 101.788 18.384 101.932 18.752C102.076 19.104 102.276 19.408 102.532 19.664C102.788 19.92 103.084 20.12 103.42 20.264C103.756 20.408 104.116 20.48 104.5 20.48ZM121.642 21.464H121.45C121.034 22.072 120.49 22.544 119.818 22.88C119.146 23.216 118.402 23.384 117.586 23.384C116.978 23.384 116.442 23.28 115.978 23.072C115.514 22.88 115.122 22.616 114.802 22.28C114.482 21.944 114.242 21.552 114.082 21.104C113.922 20.64 113.842 20.152 113.842 19.64C113.842 19.416 113.85 19.192 113.866 18.968C113.882 18.744 113.914 18.48 113.962 18.176L115.21 11.24H118.33L117.13 17.984C117.114 18.08 117.098 18.184 117.082 18.296C117.082 18.392 117.082 18.528 117.082 18.704C117.082 19.216 117.234 19.64 117.538 19.976C117.842 20.312 118.298 20.48 118.906 20.48C119.386 20.48 119.81 20.392 120.178 20.216C120.546 20.04 120.866 19.8 121.138 19.496C121.41 19.176 121.634 18.808 121.81 18.392C121.986 17.96 122.122 17.496 122.218 17L123.226 11.24H126.371L124.306 23H121.354L121.642 21.464ZM133.741 23.192C132.717 23.192 131.877 22.92 131.221 22.376C130.565 21.832 130.237 21 130.237 19.88C130.237 19.704 130.245 19.52 130.261 19.328C130.277 19.12 130.309 18.88 130.357 18.608L131.173 13.928H129.109L129.589 11.24H131.653L132.301 7.64H135.445L134.797 11.24H137.677L137.221 13.928H134.317L133.525 18.464C133.493 18.624 133.477 18.728 133.477 18.776C133.477 18.84 133.477 18.92 133.477 19.016C133.477 19.352 133.557 19.64 133.717 19.88C133.893 20.104 134.189 20.216 134.605 20.216C134.861 20.216 135.069 20.192 135.229 20.144C135.405 20.08 135.573 20 135.733 19.904L136.213 22.76C135.893 22.904 135.533 23.008 135.133 23.072C134.733 23.152 134.269 23.192 133.741 23.192Z" fill="#4A2849"/>
                    </svg>
                </button>
            </div>
        )
    }
}

export default withRouter(ExpandedDrawer)