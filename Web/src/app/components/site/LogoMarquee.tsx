import { useState } from 'react';
import appleLogo from '../../../assets/logos/apple.svg';
import jackWillsLogo from '../../../assets/logos/jack-wills.svg';

type LogoItem = {
  name: string;
  src?: string;
  title?: string;
};

const LOGO_ITEMS: LogoItem[] = [
  { name: 'Apple', src: appleLogo },
  { name: 'BMW', src: 'https://www.bmwgroup.com/etc.clientlibs/grpw-web/clientlibs/grpw-base/resources/images/logo/BMW_dark.svg' },
  { name: 'Ford', src: 'https://brand.ford.com/content/dam/brand_ford/brand-assets/logos/ford-logo.svg' },
  {
    name: 'McNeil Healthcare',
    title: 'McNeil Healthcare (Lucozade owner)',
    src: 'https://www.suntorybeverageandfood.com/common/img/logo.svg',
  },
  { name: 'Warner Music', src: 'https://www.wmg.com/sites/g/files/g2000012851/files/2020-09/warnermusicgroup-logo.svg' },
  { name: 'Audi', src: 'https://www.audi.com/content/dam/gbp2/brand/logos/audi-rings.svg' },
  { name: 'IKEA', src: 'https://www.ikea.com/global/en/images/IKEA-logo.svg' },
  { name: 'BP', src: 'https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/who-we-are/brand/bp-logo.svg' },
  { name: 'Deloitte', src: 'https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-deloitte-logo.svg' },
  { name: 'Carphone Warehouse', src: 'https://www.currysplc.com/~/media/Files/C/Currys-PLC/brands/carphone-warehouse-logo.svg' },
  { name: 'Mercedes', src: 'https://brand.mercedes-benz.com/content/dam/brandhub/assets/logo/mercedes-benz-star.svg' },
  { name: 'Renault', src: 'https://www.renaultgroup.com/wp-content/uploads/2021/03/renault-logo.svg' },
  { name: 'The Sun', src: 'https://www.news.co.uk/wp-content/uploads/2019/05/the-sun-logo.svg' },
  { name: 'Toyota', src: 'https://www.toyota.co.uk/content/dam/toyota/nmsc/united-kingdom/brand/logo/toyota-logo.svg' },
  { name: 'Skoda', src: 'https://www.skoda-storyboard.com/content/uploads/2019/01/skoda-logo.svg' },
  { name: 'Visa', src: 'https://brand.visa.com/dam/VCOM/brand-assets/logos/visa/blue/logo.svg' },
  { name: 'Chevrolet', src: 'https://www.gm.com/content/dam/company/brand/Chevrolet-logo.svg' },
  { name: 'Jack Wills', src: jackWillsLogo },
  { name: 'JWT', src: 'https://media.licdn.com/dms/image/C4D0BAQHjwtlogo/company-logo_200_200' },
  { name: 'Iconmobile', src: 'https://media.licdn.com/dms/image/C4D0BAQHiconmobile/company-logo_200_200' },
  { name: 'Somo', src: 'https://media.licdn.com/dms/image/C4D0BAQHsomo/company-logo_200_200' },
  { name: 'UBM', src: 'https://www.informamarkets.com/globalassets/logos/ubm-logo.svg' },
  { name: 'Incisive Media', src: 'https://www.incisivemedia.com/wp-content/uploads/2020/03/incisive-media-logo.svg' },
  { name: 'Ceska Televize', src: 'https://img.ceskatelevize.cz/logo/ct-logo.svg' },
  { name: 'Meteopress', src: 'https://media.licdn.com/dms/image/C4D0BAQHmeteopress/company-logo_200_200' },
];

function LogoTile({ name, src, title }: LogoItem) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className="logo-item" title={title ?? name}>
      {showImage ? (
        <img
          className="logo-image"
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="logo-text">{name}</span>
      )}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className="overflow-hidden border-y border-white/10 bg-[#1A1718]/60 py-6">
        <div className="logo-marquee">
          <div className="logo-track">
            {LOGO_ITEMS.map((item) => (
              <LogoTile key={`logo-${item.name}`} {...item} />
            ))}
          </div>
          <div className="logo-track" aria-hidden="true">
            {LOGO_ITEMS.map((item) => (
              <LogoTile key={`logo-dup-${item.name}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
