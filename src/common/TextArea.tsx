import { useField } from "formik";
import * as React from "react";

// export default function TextArea({ label, ...props }) {
//     // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//     // which we can spread on <input> and alse replace ErrorMessage entirely.
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <textarea className="text-area" {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };
