import { Box, Button, useColorModeValue, useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Fragment, useState, useEffect } from 'react';
import Heading from '../../common/components/Heading';
import Icon from '../../common/components/Icon';
import Text from '../../common/components/Text';
import useStyle from '../../common/hooks/useStyle';
import useSignup from '../../common/store/actions/signupAction';
// import bc from '../../common/services/breathecode';

const Summary = ({
  formProps,
  // courseTitle,
  // planProps,
}) => {
  const { t } = useTranslation('signup');
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {
    state, nextStep, setPlanData, setSelectedPlanCheckoutData, handleChecking,
  } = useSignup();
  const { dateProps, planData, checkoutData, selectedPlanCheckoutData } = state;
  const toast = useToast();
  const data = [
    {
      type: 'pro',
      show: true,
      title: 'One time payment',
      price: '$199',
      lastPrice: '<s>$399</s>',
      offerTitle: 'Limited offer',
      description: 'One time payment',
      highlightText: '',
      bullets: {
        title: 'What you will get',
        list: [
          {
            title: 'Unlimited access to group masterclasses',
          },
          {
            title: 'Unlimited access to workshops',
          },
          {
            title: 'Unlimited access to course content',
          },
          {
            title: 'Certificate endorsed by industry leaders',
          },
        ],
      },
      button: {
        title: 'Start your free trial',
        link: '#enroll',
      },
    },
    {
      type: 'schoolarship-t1',
      show: true,
      title: 'scholarship level 1',
      price: '$70',
      months: '3 months',
      highlightText: '',
      description: '3 payment, each every month',
      bullets: {
        title: 'What you will get',
        list: [
          {
            title: 'scholarship level 1 - featured 1',
          },
          {
            title: 'scholarship level 1 - featured 2',
          },
          {
            title: 'scholarship level 1 - featured 3',
          },
          {
            title: 'scholarship level 1 - featured 4',
          },
        ],
      },
      button: {
        title: 'Enroll now',
        link: '#enroll',
      },
    },
    {
      type: 'schoolarship-t2',
      show: true,
      title: 'scholarship level 2',
      price: '$50',
      months: '5 months',
      highlightText: '',
      description: '5 payments, each every month',
      bullets: {
        title: 'What you will get',
        list: [
          {
            title: 'scholarship level 2 - featured 1',
          },
          {
            title: 'scholarship level 2 - featured 2',
          },
          {
            title: 'scholarship level 2 - featured 3',
          },
          {
            title: 'scholarship level 2 - featured 4',
          },
        ],
      },
      button: {
        title: 'Enroll now',
        link: '#enroll',
      },
    },
  ];

  const fontColor = useColorModeValue('gray.800', 'gray.300');
  const featuredBackground = useColorModeValue('featuredLight', 'featuredDark');
  const borderColor2 = useColorModeValue('black', 'white');
  const { backgroundColor, borderColor } = useStyle();

  useEffect(() => {
    if (typeof selectedIndex === 'number') {
      setPlanData(data[selectedIndex]);
      setSelectedPlanCheckoutData(checkoutData?.plans[selectedIndex]);
    }
  }, [checkoutData?.plan]);

  const handleSubmit = () => {
    if (planData?.type) {
      // TODO: Maybe we need to update checking when selects another plan
      handleChecking()
        .then(() => {
          nextStep();
        })
        .catch(() => {
          toast({
            title: 'Something went wrong choosing plan',
            status: 'error',
            duration: 6000,
            isClosable: true,
          });
        });
    }
  };

  const existsAmountPerHalf = checkoutData?.amount_per_half > 0;
  const existsAmountPerMonth = checkoutData?.amount_per_month > 0;
  const existsAmountPerQuarter = checkoutData?.amount_per_quarter > 0;
  const existsAmountPerYear = checkoutData?.amount_per_year > 0;

  const isNotTrial = existsAmountPerHalf || existsAmountPerMonth || existsAmountPerQuarter || existsAmountPerYear;

  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      gridGap="30px"
      mb="1rem"
    >
      <Box display="flex" flexDirection="column" flex={0.5} gridGap="3rem">
        <Box display="flex" flexDirection="column" gridGap="10px">
          <Heading size="18px" textTransform="uppercase">
            {t('cohort-details')}
          </Heading>
          <Box
            as="hr"
            width="30%"
            margin="0 0 10px 0"
            h="1px"
            borderColor={borderColor2}
          />
          <Box display="flex" flexDirection="column" gridGap="10px">
            <Text size="md" fontWeight="700">
              {t('cohort-name')}
            </Text>
            <Text
              size="md"
              fontWeight="400"
              color={fontColor}
              textTransform="capitalize"
            >
              {dateProps?.name}
              <Text
                size="sm"
                fontWeight="700"
                textTransform="capitalize"
                color={fontColor}
              >
                {dateProps?.syllabus_version?.name}
              </Text>
            </Text>
          </Box>

          <Box
            as="hr"
            width="100%"
            margin="0 0"
            h="1px"
            borderColor={borderColor}
          />

          <Box display="flex" flexDirection="column" gridGap="10px">
            <Text size="md" fontWeight="700">
              {t('start-date')}
            </Text>
            <Text size="md" fontWeight="400" color={fontColor}>
              {dateProps?.kickoffDate[router.locale]}
            </Text>
          </Box>

          <Box
            as="hr"
            width="100%"
            margin="0 0"
            h="1px"
            borderColor={borderColor}
          />

          <Box display="flex" flexDirection="column" gridGap="10px">
            {dateProps?.weekDays[router.locale].length > 0 && (
              <>
                <Text size="md" fontWeight="700">
                  {t('days-and-hours')}
                </Text>
                <Text size="md" fontWeight="400" color={fontColor}>
                  {dateProps?.weekDays[router.locale].map(
                    (day, i) => `${
                      // eslint-disable-next-line no-nested-ternary
                      i !== 0
                        ? i < dateProps?.weekDays[router.locale].length - 1
                          ? ','
                          : ` ${t('common:and')}`
                        : ''
                    } ${day}`,
                  )}
                </Text>
              </>
            )}
            <Text size="md" fontWeight="400" color={fontColor}>
              {dateProps?.availableTime}
            </Text>
            <Text size="md" fontWeight="400" color={fontColor}>
              {/* {dateProps?.formatTime} */}
              {dateProps?.timezone}
            </Text>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gridGap="10px">
          <Heading size="18px" textTransform="uppercase">
            {t('profile-details')}
          </Heading>
          <Box
            as="hr"
            width="30%"
            margin="0 0 10px 0"
            h="1px"
            borderColor={borderColor2}
          />
          <Box display="flex" flexDirection="column" gridGap="10px">
            <Text size="md" fontWeight="700">
              {t('your-name')}
            </Text>
            <Text size="md" fontWeight="400" color={fontColor}>
              {`${formProps?.first_name} ${formProps?.last_name}`}
            </Text>
          </Box>
          <Box
            as="hr"
            width="100%"
            margin="0 0"
            h="1px"
            borderColor={borderColor}
          />
          <Box display="flex" flexDirection="row" gridGap="10px">
            {formProps?.phone && (
              <Box display="flex" flexDirection="column" gridGap="10px">
                <Text size="md" fontWeight="700">
                  {t('phone-number')}
                </Text>
                <Text size="md" fontWeight="400" color={fontColor}>
                  {formProps?.phone}
                </Text>
              </Box>
            )}
            <Box display="flex" flexDirection="column" gridGap="10px">
              <Text size="md" fontWeight="700">
                {t('email')}
              </Text>
              <Text size="md" fontWeight="400" color={fontColor}>
                {formProps?.email}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" flex={0.5}>
        <Box
          display="flex"
          flexDirection="column"
          background={featuredBackground}
          w="100%"
          height="fit-content"
          p="11px 14px"
          gridGap="12px"
          borderRadius="14px"
        >
          <Heading size="15px" color="blue.default" textTransform="uppercase">
            {t('signing-for')}
          </Heading>
          <Box display="flex" gridGap="12px">
            <Box display="flex" flexDirection="column">
              <Box
                p="16px"
                background="blue.default"
                borderRadius="7px"
                width="fit-content"
              >
                <Icon icon="coding" width="48px" height="48px" color="#fff" />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gridGap="7px">
              <Heading size="18px">
                {/* {courseTitle} */}
                {dateProps?.syllabus_version?.name}
              </Heading>

              {planData?.description && (
                <Heading
                  size="15px"
                  textTransform="uppercase"
                  color={useColorModeValue('gray.500', 'gray.400')}
                >
                  {selectedPlanCheckoutData?.description}
                  {/* {planData?.description} */}
                </Heading>
              )}
            </Box>
            {/* {planData?.price && (...) */}
            {selectedPlanCheckoutData?.price && (
              <Heading
                size="m"
                margin="0 26px 0 auto"
                color="blue.default"
                textTransform="uppercase"
                textAlign="end"
              >
                {`$${selectedPlanCheckoutData?.price}`}
              </Heading>
            )}
          </Box>
          <Box
            as="hr"
            width="100%"
            margin="0"
            h="1px"
            borderColor={borderColor}
          />
          {planData?.bullets?.title && (
            <Box fontSize="14px" fontWeight="700" color="blue.default">
              {planData?.bullets?.title}
            </Box>
          )}
          <Box
            as="ul"
            style={{ listStyle: 'none' }}
            display="flex"
            flexDirection="column"
            gridGap="12px"
          >
            {planData?.bullets?.list?.map((bullet) => (
              <Box
                as="li"
                key={bullet?.title}
                display="flex"
                flexDirection="row"
                lineHeight="24px"
                gridGap="8px"
              >
                <Icon
                  icon="checked2"
                  color="#38A56A"
                  width="13px"
                  height="10px"
                  style={{ margin: '8px 0 0 0' }}
                />
                <Box
                  fontSize="14px"
                  fontWeight="600"
                  letterSpacing="0.05em"
                  dangerouslySetInnerHTML={{ __html: bullet?.title }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box background={backgroundColor} pt="22px">
          <Heading
            size="xsm"
            p="0 0 12px 0"
          >
            {t('select-payment-plan')}
          </Heading>
          <Box display="flex" flexDirection="column" gridGap="10px">
            {/* {data */}
            {checkoutData?.plans
              .filter((l) => l.status === 'ACTIVE')
              .map((item, i) => (
                <Fragment key={`${item.slug}`}>
                  <Box
                    display="flex"
                    onClick={() => {
                      setSelectedIndex(i);
                      // setPlanData(item);
                      setSelectedPlanCheckoutData(item);
                    }}
                    flexDirection={{ base: 'column', md: 'row' }}
                    width="100%"
                    justifyContent="space-between"
                    // p={selectedIndex === i ? '22px 18px' : '26px 22px'}
                    p={{ base: '8px 14px', md: '22px 18px' }}
                    gridGap={{ base: '0', md: '12px' }}
                    cursor="pointer"
                    // background={selectedIndex !== i && featuredColor}
                    border={selectedIndex === i ? '2px solid #0097CD' : '2px solid transparent'}
                    borderRadius="13px"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      gridGap={{ base: '0', md: '4px' }}
                      minWidth={{ base: '100%', md: '288px' }}
                      height="fit-content"
                      fontWeight="400"
                    >
                      <Box fontSize="18px" fontWeight="700">
                        {item?.title}
                      </Box>
                      <Text
                        size="md"
                        fontWeight="500"
                        mb="6px"
                        // dangerouslySetInnerHTML={{
                        //   __html: item?.description,
                        // }}
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      />
                    </Box>
                    <Box display="flex" alignItems="center" gridGap="10px">
                      <Heading
                        as="span"
                        size="m"
                        lineHeight="1"
                        textTransform="uppercase"
                        color="blue.default"
                      >
                        {`$${item?.price}`}
                      </Heading>
                    </Box>
                  </Box>
                </Fragment>
              ))}
          </Box>
        </Box>
        {isNotTrial ? (
          <Button
            variant="default"
            onClick={handleSubmit}
            height="45px"
            mt="12px"
          >
            {t('common:proceed-to-payment')}
          </Button>
        ) : (
          <Button
            variant="outline"
            borderColor="blue.200"
            background={featuredBackground}
            _hover={{ background: featuredBackground, opacity: 0.8 }}
            _active={{ background: featuredBackground, opacity: 1 }}
            color="blue.default"
            height="45px"
            mt="12px"
          >
            {t('common:start-free-trial')}
          </Button>
        )}
        {/* {!planData?.type?.includes('trial') && (
          <Button
            variant="default"
            onClick={handleSubmit}
            height="45px"
            mt="12px"
          >
            {t('common:proceed-to-payment')}
          </Button>
        )}
        {planData?.type?.includes('trial') && (
          <Button
            variant="outline"
            borderColor="blue.200"
            background={featuredBackground}
            _hover={{ background: featuredBackground, opacity: 0.8 }}
            _active={{ background: featuredBackground, opacity: 1 }}
            color="blue.default"
            height="45px"
            mt="12px"
          >
            {t('common:start-free-trial')}
          </Button>
        )} */}
      </Box>
    </Box>
  );
};

Summary.propTypes = {
  formProps: PropTypes.objectOf(PropTypes.any).isRequired,
  // planProps: PropTypes.objectOf(PropTypes.any).isRequired,
  // courseTitle: PropTypes.string.isRequired,
};

export default Summary;
