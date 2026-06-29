
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.iRHCMwIP.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DFwQbEju.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BrMqA10j.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.Db0geend.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload.rJOMUPi9.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.DsjjwgBl.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument.qctWUh02.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.D1My7cn-.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.DdcvMVBW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.CEEED7wJ.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.DgCS3uXq.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.BGuMcPJ5.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes.BIc8va0n.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.B80qIJuL.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.BepOSYwJ.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.DwZtcnrv.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.DQvMijCr.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.Caj4aUL_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DRyiqOJz.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.DhCiFYLA.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.Cf-SLaYD.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.BE6_Iz0e.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.DbouC_95.js","/cdn/shopifycloud/checkout-web/assets/c1/CalloutHeader.bgbNkir1.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.0Owa-c0u.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCheckoutProtocolDarkTheme.DEPHdkG4.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.BB6lNEcT.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.D3viLG3X.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.Sd4HTN2m.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.DyTvLSdY.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.D1bF-mg7.js","/cdn/shopifycloud/checkout-web/assets/c1/CompactChoiceList.DAF-0A1J.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BeHCeHoF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.Cw8pAC-n.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.BGO49dcG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.C68ggH8q.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.at-Z0VAI.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.CF6dj8Fr.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.gafTIYRa.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.DfiYt5HE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod.Bt4oKcFD.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.zCE9jraY.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks.CRLJuH0S.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo.Diifkr6H.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.CJb8OTtA.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.Dv2etlOI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.M42aXWe4.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.xfKMzJr4.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment.Cjf83s18.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.C4XOYbHf.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.CsMI81N5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.CKNzuDPn.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner.BWufzhyM.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input.qHVW9vHr.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility.DTdhotZw.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants.Cu2A-vp8.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.BKGp5F45.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.D7kNM7AH.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.BPsHw5RI.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DMLsEFOT.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.CHw83fKl.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Dk6uhTSh.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.C9g6faPX.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.j0hCvm0W.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.BYTLcG41.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.DShIM2X1.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.DuOCs3Bw.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DbD44Oi3.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects.sXRiKBHd.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.qGZN7d2y.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.BiM5d3ir.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.DtmT9aM2.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.B3H40Ygh.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CMvjny27.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.Wy3nLeF-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.Brp6A-O7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CQM_ODoE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.D_EbuoqI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField._-wGYt7f.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CtCAWdWo.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletLogo.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.C1nBZn0x.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CompactChoiceList.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.Dj0n4Opx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.DN6CUyst.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.Dl_bEC_c.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayPalOverCaptureInfoBanner.CuS5ve3d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePostPurchase.uv-X4L1-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CalloutHeader.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0552/6778/6867/files/Gitfos_x320.png?v=1637765164"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  