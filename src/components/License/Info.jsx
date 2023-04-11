import style from "./License.module.scss";
function Info({ link, label, imgSrc }) {
  return (
    <div className={`${style.info}`}>
      <img
        src={imgSrc}
        alt=""
        className={`${style.infoImg}`}
      />
      <a
        href={link}
        rel="author"
      >
        @{label}
      </a>
    </div>
  );
}

export default Info;
