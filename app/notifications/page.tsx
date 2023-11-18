'use client';

import { Container } from '@/components/layout/container';
import EmptyState from '@/components/shared/empty-state';
import Loader from '@/components/shared/loader';
import NotificationItem from '@/components/shared/notification-item';
import { Separator } from '@/components/ui/separator';
import useNotifications from '@/hooks/useNotifications';
import { InboxIcon } from 'lucide-react';

const NotificationsPage = () => {
  const { notifications, isLoading } = useNotifications();

  if (isLoading) {
    return <Loader className='h-screen' />;
  }

  return (
    <Container className='w-[500px]'>
      {notifications?.length === 0 ? (
        <EmptyState
          icon={<InboxIcon size={32} />}
          title='No notifications'
          description='Notifications inbox is empty.'
        />
      ) : (
        <ul className='gap-4'>
          {notifications?.map((notification, index) => (
            <li key={index}>
              {index !== 0 && <Separator />}
              <NotificationItem content={notification.content} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default NotificationsPage;
