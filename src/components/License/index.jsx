import style from "./License.module.scss";
import Info from "./Info";
function License({ children }) {
  return (
    <>
      <address className={`${style.license}`}>
        <span>Created by:</span>
        <div className={`${style.infoWrapper}`}>
          <Info
            link="https://github.com/sonbk040901"
            label="sonbk040901"
            imgSrc="/static/github.png"
          />
          <Info
            link="https://www.facebook.com/bk04092001"
            label="bk04092001"
            imgSrc="/static/facebook.png"
          />
        </div>
      </address>
      {children}
    </>
  );
}

export default License;
