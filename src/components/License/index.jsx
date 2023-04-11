import style from "./License.module.scss";
function License({ children }) {
  return (
    <>
      <address className={`${style.license}`}>
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
          @sonbk040901
        </a>
      </address>
      {children}
    </>
  );
}

export default License;
