import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Drop N <span className="text-color-primary">Storage</span>
            </h1>
            <div className="container-xs">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Somos el partner clave para tu negocio.
                </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Nosotros almacemos y despachamos tu(s) producto(s).
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Tú solo te ocupas de vender y administrar tu negocio.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://dropnstorage.cl/contratar">
                    Contratar Servicio
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://dropnstorage.cl/#servicios">
                    Ver Servicios
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;