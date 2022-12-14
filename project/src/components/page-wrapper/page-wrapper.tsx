type Props = {
  children: JSX.Element;
  pageClass?: string;
}

function PageWrapper(props: Props): JSX.Element {
  return (
    <div className={`page ${props.pageClass || ''}`}>
      {props.children}
    </div>
  );
}

export default PageWrapper;
