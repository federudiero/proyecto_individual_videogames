const urlRegex = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/;
const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

export const validate = (form) => {
    const errors = {};
    if (form.name === "") errors.name = "Name cannot be null";
    else if (form.name.length < 2)
      errors.name = "Name must have 2 characters at least";

    if (form.description === "")
      errors.description = "Description cannot be null";
    else if (form.description.length < 10)
      errors.description = "Description must have 10 characters at least";

    if (form.platforms.length === 0)
      errors.platforms = "There must be at least 1 platform";
    
    if (!urlRegex.test(form.background_image))
      errors.background_image = "Invalid URL";
    
    if (form.released === "") errors.released = "Date cannot be null";
    else if (!dateRegex.test(form.released))
      errors.released = "Invalid date format";

    if (!form.rating) errors.rating = "Rating cannot be null";

    if (form.genres.length === 0)
      errors.genres = "There must be at least 1 genre";

    return errors;
  };