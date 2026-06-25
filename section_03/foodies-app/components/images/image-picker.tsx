'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css'

const ImagePicker = ({label, name}: {label: string, name: string}) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickImage() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Image picked by the user" fill />}
        </div>
        <input
          ref={imageInputRef}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickImage}>Pick an Image</button>
      </div>
    </div>
  )
}

export default ImagePicker