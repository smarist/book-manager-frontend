import styles from './ImageUploader.module.scss';
import uploadIcon from "../../assets/upload-icon.svg"

const ImageUploader = ({
  label,
  name,
  onSelectImage,
  imgSrc,
  imgName,
}) => {
  return(
    <div className={styles["form-group"]}>
      <div className={styles["form-container"]}>
        <span className="caption grey-500">{label}</span>
        <label className={styles["file-select"]}>
          <input
            type="file"
            name={name}
            onChange={(e) => onSelectImage(e)}
          />
          <div className={styles["file-input-ui-container"]}>
            {imgSrc ? (
              <div className={styles["selected-image"]}>
                <img src={imgSrc} alt="file icon" />
              </div>
            ) : (
              <div className={styles["file-image"]}>
                <img src={uploadIcon} alt="file icon" />
              </div>
            )}
            <div className={styles["file-image-description"]}>
              <h6 className={styles["file-input-heading"]}>
                {imgSrc ? 'Change File' : 'Drop or Select File'}
              </h6>
              <span className="caption grey-500">
               {imgName ? imgName : 'Drop files here or select a file from your file explorer' }
              </span>
            </div>
          </div>
        </label>
      </div>
    </div>
  )
}

export default ImageUploader;