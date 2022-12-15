import { useInView } from 'react-intersection-observer';

const MultipleObserver = ( {children} ) => {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
             <div ref={ref}>    
               { inView ? <div>{children}</div> : "" }
             </div>
          )
}

export default MultipleObserver;