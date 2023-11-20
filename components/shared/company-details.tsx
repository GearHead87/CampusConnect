'use client';
import useCompany from '@/hooks/useCompany';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import Loader from './loader';
import { Separator } from '../ui/separator';
import DescriptionList from './description-list';
import UserAvatar from './user-avatar';

const CompanyDetails = ({ name, id }: { name: string; id: string }) => {
  const { company, isLoading } = useCompany(id);

  const details: { [key: string]: any } = {};

  if (company) {
    for (const [key, value] of Object.entries(company)) {
      if (
        key === 'id' ||
        key === 'logo' ||
        key === 'createdAt' ||
        key === 'updatedAt' ||
        key === 'ownerId' ||
        key === 'name'
      ) {
        continue;
      }
      details[key] = value;
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='link' className='p-0'>
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className='gap-8'>
        {isLoading ? (
          <Loader />
        ) : (
          details && (
            <>
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
              </DialogHeader>
              <dl>
                <DescriptionList
                  name='Logo'
                  value={
                    <UserAvatar
                      name={name}
                      image={company?.logo}
                      className='h-16 w-16 rounded-md'
                    />
                  }
                />
                {Object.entries(details).map(([key, value]) => (
                  <>
                    <Separator className='my-4 sm:my-6' />
                    <DescriptionList name={key} value={value} />
                  </>
                ))}
              </dl>
            </>
          )
        )}
      </DialogContent>
    </Dialog>
  );
};

CompanyDetails.displayName = 'CompanyDetails';
export default CompanyDetails;
