import React from "react";
import styles from "./CSSModule.module.css";
const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      {/* 렌더링을 하게 되면 클래스 이름을 CSSModule_wrapper_hqEWL(해시값)으로 변경
    CSSModule_inverted_bfBSQ(해시값)
    해시값은 클래스 이름을 구별하기 위해서 자동으로 붙여준다 */}
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};
export default CSSModule;
