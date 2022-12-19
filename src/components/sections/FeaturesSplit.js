import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Un flujo de trabajo que funciona',
    paragraph: 'Nuestro modelo de negocio es excelente para quienes necesitan emprender de una forma rápida, fácil y sin mucho capital. Contamos con nuestro propio marketplace, así puedes vender tus productos sin necesidad de tener que pagar un sitio web.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Persona natural
                  </div>
                <h3 className="mt-0 mb-12">
                  Persona Natural
                  </h3>
                <p className="m-0">
                 - 1 locker personal 25x25x25[cm]
                </p>
                <p className="m-0">
                 - Recibimos tus encomiendas
                </p>
                <p className="m-0">
                 - Recoge tu paquete en nuestro local cuando quieras
                </p>
                <p className="m-0">
                 - Entregamos tu paquete a tu servicio de delivery
                </p>
                <p className="m-0">
                 - Recibe notificación cuando recibimos o entregamos tu paquete
                </p>
                <p className="m-0">
                  Contratar 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Persona Natural Emprendedor
                  </div>
                <h3 className="mt-0 mb-12">
                  Persona Natural Emprendedor
                  </h3>
                <p className="m-0">
                  - 1 locker personal 25x25x25[cm]
                </p>
                <p className="m-0">
                  -Recibimos tus envios
                </p>
                <p className="m-0">
                  - Recoge tu paquete en nuestro local cuando quieras
                </p>
                <p className="m-0">
                  - Vende y gestiona desde la comodidad de tu casa
                </p>
                <p className="m-0">
                  - us clientes pueden retirar el producto directamente en nuestra bodega
                </p>
                <p className="m-0">
                  - Entregamos el producto a tu servicio de delivery
                </p>
                <p className="m-0">
                  - Recibe notificación cuando recibimos o entregamos tu paquete
                </p>
                <p className="m-0">
                  
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  E-Commerce Starter
                  </div>
                <h3 className="mt-0 mb-12">
                  E-Commerce Starter
                  </h3>
                <p className="m-0">
                  - 1[m3] de almacenanamiento (o a convenir)
                </p>
                <p className="m-0">
                  - Servicio de recepción y almacenaje de tus productos
                </p>
                <p className="m-0">
                  - No requieres tener tienda o local físico
                </p>
                <p className="m-0">
                  - Vendes desde la comodidad de tu casa
                </p>
                <p className="m-0">
                  - Tus clientes pueden retirar el producto directamente en nuestra bodega
                </p>
                <p className="m-0">
                  - Entregamos el producto al servicio de delivery
                </p>
                <p className="m-0">
                  - Tu sitio web gratis (sujeto a nuestas condiciones o puedes usar tu propio sitio)
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  E-Commerce Pro
                  </div>
                <h3 className="mt-0 mb-12">
                  E-Commerce Pro
                  </h3>
                <p className="m-0">
                  - Espacio de almacenanamiento acorde a tu volumen
                </p>
                <p className="m-0">
                  - Servicio de recepción y almacenaje de tus productos
                </p>
                <p className="m-0">
                  - Servicio de recepción y almacenaje de tus productos
                </p>
                <p className="m-0">
                  - Vendes desde la comodidad de tu casa
                </p>
                <p className="m-0">
                  - No requieres tener tienda o local físico
                </p>
                <p className="m-0">
                  - Vendes desde la comodidad de tu casa
                </p>
                <p className="m-0">
                  - Tus clientes pueden retirar el producto directamente en nuestra bodega
                </p>
                <p className="m-0">
                  - Entregamos el producto al servicio de delivery
                </p>
                <p className="m-0">
                  - Tu sitio web gratis (sujeto a nuestas condiciones o puedes usar tu sitio propio)
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;