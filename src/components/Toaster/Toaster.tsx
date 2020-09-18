import { notification } from 'antd';

export enum ToasterType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export const toaster = (title: string, message: string, type: ToasterType) => {
  notification[type]({
    message: title,
    description: message,
  });
};
