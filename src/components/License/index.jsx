import style from "./License.module.scss";
function License({ children }) {
  return (
    <>
      <div className={`${style.license}`}>
        Created by:
        <img
          src="/static/github.png"
          alt="github"
          className={`${style.github}`}
        />
        <a
          href="https://github.com/sonbk040901"
          rel="author"
        >
          @sonlebk040901
        </a>
      </div>
      {children}
    </>
  );
}

export default License;
