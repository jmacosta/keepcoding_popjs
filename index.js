import { loaderController } from './loader/loaderController.js';
import { notificationsController } from './notification/notificationController.js';
import { productListController } from './product_list/productListController.js';
import { sessionController } from './session/sessionController.js';

document.addEventListener('DOMContentLoaded', () => {
  const session = document.querySelector('#session');
  const productList = document.querySelector('#products_list');
  const loader = document.querySelector('#loader');
  const notifications = document.querySelector('#notification');

  sessionController(session);
  const { show, hide } = loaderController(loader);
  const showNotification = notificationsController(notifications);
  productList.addEventListener('startLoadingProducts', () => {
    show();
  });

  productList.addEventListener('finishLoadingProducts', () => {
    hide();
  });
  productList.addEventListener('error', () => {
    showNotification('Error al cargar productos', 'error');
  });
  productList.addEventListener('productsLoaded', () => {
    showNotification('Productos cargados correctamente', 'success');
  });

  productListController(productList);
});
