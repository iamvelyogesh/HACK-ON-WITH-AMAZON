import React from 'react';

function Amazon() {
  const containerStyle = {
    display: 'flex',
    height: '70vh',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const bigBoxStyle = {
    flex: 2,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginRight: '20px'
  };

  const smallBoxContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const smallBoxStyle = {
    backgroundColor: '#d0d0d0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    height: '48%'
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%'
  };
  const imageStyle1= {
    maxWidth: '250%',
    maxHeight: '100%',
  
  };

  const textStyle = {
    position: 'absolute',
    top: '5px',
    left: '10px',
      fontWeight: 'bold',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px'
  };

  const textStyle3 = {
    
     marginBottom:'5px',
      fontWeight: 'bold',
    
    padding: '5px 10px',
    borderRadius: '5px'
  };

  const textStyle1 = {
    position: 'absolute',
    top: '40px',
    left: '10px',
    fontSize:'20px',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px'
  };
  const textStyle2 = {
    position: 'absolute',
    bottom: '8px',
    left: '10px',
    fontSize:'15px',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px'
  };
  return (
    <div style={containerStyle}>
      <div style={bigBoxStyle}>
        <div style={textStyle}>Prime Video: Recommended for you</div>
        <div style={textStyle1}>Modern Love Chennai - Season 1</div>
        <a
          href="https://www.amazon.in/gp/video/ssoredirect/?ie=UTF8&pvp=%2Fdetail%2Famzn1.dv.gti.8df3f8b4-2abf-495b-b4fa-cdc8ab1cf3fc&ref_=dvm_crs_in_dk_hud_rfy_p_dw&source=standards&token=5AA88DFA9D67585B16D08920442C28AB49C39F2B&pd_rd_w=tHDiU&content-id=amzn1.sym.eb8314b7-4dd3-415d-a4b6-f9d7cbc90fac&pf_rd_p=eb8314b7-4dd3-415d-a4b6-f9d7cbc90fac&pf_rd_r=ZEGBI36VCEGH65CGDE89&pd_rd_wg=qLgsn&pd_rd_r=77c7b712-48eb-4f14-8f05-732589dec843"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <div style={textStyle2}>Start Watching on Prime Video</div>
        </a>
        <a href="https://www.amazon.in/gp/video/ssoredirect/?ie=UTF8&pvp=%2Fdetail%2Famzn1.dv.gti.8df3f8b4-2abf-495b-b4fa-cdc8ab1cf3fc&ref_=dvm_crs_in_dk_hud_rfy_p_dw&source=standards&token=5AA88DFA9D67585B16D08920442C28AB49C39F2B&pd_rd_w=tHDiU&content-id=amzn1.sym.eb8314b7-4dd3-415d-a4b6-f9d7cbc90fac&pf_rd_p=eb8314b7-4dd3-415d-a4b6-f9d7cbc90fac&pf_rd_r=ZEGBI36VCEGH65CGDE89&pd_rd_wg=qLgsn&pd_rd_r=77c7b712-48eb-4f14-8f05-732589dec843" target="_blank" rel="noopener noreferrer">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/a2ab8e77c66b5b01b3d1d65e8db80266fcb4e1b17af8ff6f569cfc6bc1039468._AC_SL792_.jpg" alt="Big Box" style={imageStyle} />
         
        </a>
      </div>
      <div style={smallBoxContainerStyle}>
        <div style={smallBoxStyle}>
            <div style={textStyle3}>Up to 50% off | International brands</div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_23/379X304._SY304_CB556740834_.jpg" alt="Big Box" style={imageStyle1} />
        </div>
        <div style={smallBoxStyle}>
        <img src="https://m.media-amazon.com/images/I/713dTg-GyuL._AC_SY200_.jpg" alt="Big Box" style={imageStyle1} />
        <img src="https://m.media-amazon.com/images/I/81AduJALuyL._AC_SY200_.jpg" alt="Big Box" style={imageStyle1} />

           </div>
      </div>
    </div>
  );
}

export default Amazon;

