'use client';

import { useState, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { Separator } from '@/components/ui/separator';
import { Flex } from '@/components/layout/flex';
import Loader from '@/components/shared/loader';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const CommentForm = dynamic(() => import('./comment-form'), {
  ssr: false,
  loading: () => <Loader />,
});

interface CommentDialogProps {
  postId: string;
  postContent: React.ReactNode;
  children: React.ReactNode;
}

const CommentDialog = forwardRef<HTMLButtonElement, CommentDialogProps>(
  ({ postId, postContent, children }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild ref={ref}>
          {children}
        </DialogTrigger>
        <DialogContent hideCloseBtn className='pt-10'>
          <Flex direction='column'>
            {postContent}
            <Separator
              orientation='vertical'
              className='my-3 ml-5 h-auto w-0.5 py-2'
            />
            <CommentForm postId={postId} setOpen={setOpen} />
          </Flex>
        </DialogContent>
      </Dialog>
    );
  }
);

CommentDialog.displayName = 'CommentDialog';
export default CommentDialog;
