import React from 'react';
import { IMessage, ButtonTypeEnum } from '@novu/shared';
import { INotificationCenterContext } from '../index';

export const NotificationCenterContext = React.createContext<INotificationCenterContext>({
  onUrlChange: (url: string) => {},
  onNotificationClick: (notification: IMessage) => {},
  onUnseenCountChanged: (unseenCount: number) => {},
  onActionClick: (identifier: string, type: ButtonTypeEnum, message: IMessage) => {},
  isLoading: true,
  header: null,
  footer: null,
  listItem: null,
  actionsResultBlock: null,
  tabs: [],
  showUserPreferences: true,
} as any);
