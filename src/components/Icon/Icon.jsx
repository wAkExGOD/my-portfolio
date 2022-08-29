import { useEffect, useRef, useState } from 'react';

export const Icon = ({ name, size = 16, fill = '#000' }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../../assets/img/${name}.svg`);
        ImportedIconRef.current = namedImport.ReactComponent;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    // return <ImportedIcon width={size} height={size} fill={fill} />;
    return <img src={ImportedIcon} alt="icon" />;
  }

  return null;
};

// function useDynamicSVGImport(name, options = {}) {
//   const ImportedIconRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();

//   const { onCompleted, onError } = options;
//   useEffect(() => {
//     setLoading(true);
//     const importIcon = async () => {
//       try {
//         console.log((await import(
//           /* webpackInclude: /\.svg$/ */
//           /* webpackChunkName: "svg-imgs-chunk" */
//           /* webpackMode: "lazy" */
//           `../../assets/img/${name}.svg`
//         )).default);
//         ImportedIconRef.current = (
//           await import(
//           /* webpackInclude: /\.svg$/ */
//           /* webpackChunkName: "svg-imgs-chunk" */
//           /* webpackMode: "lazy" */
//             `../../assets/img/${name}.svg`
//           )
//         ).ReactComponent;
//         if (onCompleted) {
//           onCompleted(name, ImportedIconRef.current);
//         }
//       } catch (err) {
//         if (onError) {
//           onError(err);
//         }
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     importIcon();
//   }, [name, onCompleted, onError]);

//   return { error, loading, SvgIcon: ImportedIconRef.current };
// }

// export const Icon = ({ name, onCompleted, onError, ...rest }) => {
//   const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
//     onCompleted,
//     onError
//   });
//   // console.log(error, loading, SvgIcon);
//   if (error) {
//     console.error(error.message);
//   }
//   if (loading) {
//     return 'Loading...';
//   }
//   if (SvgIcon) {
//     return <SvgIcon {...rest} />;
//   }
//   return null;
// };