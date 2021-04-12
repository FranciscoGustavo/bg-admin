import { FC } from 'react';
import Link from 'next/link';
import { Box, Button } from '@material-ui/core';
import { useStyles } from './styles';

type ToolbarProps = {
  label: string;
  hrefAdd: string;
};

const Toolbar: FC<ToolbarProps> = ({ label, hrefAdd }) => {
  const { SRoot } = useStyles();
  return (
    <Box>
      <Box className={SRoot}>
        <Link href={hrefAdd}>
          <Button component="a" variant="contained" color="primary">
            {label}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Toolbar;
