export const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/;
export const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
export const phoneRegex =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
export const cepRegex = /^\d{5}-\d{3}$/;
export const carryRegex = /^(P|p|M|m|G|g|XG|xg|XXG|xxg)$/;
export const weightRegex = /^\d+(\.\d{1,2})?$/;
